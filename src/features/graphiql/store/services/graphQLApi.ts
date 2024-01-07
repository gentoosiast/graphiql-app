import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RootState } from '@/store';

import { parseEditorCodeToObject, parseHeaders } from '../../utils';
import { getIntrospectionQuery } from './getIntrospectionQuery';

type GraphQLResponse = {
  data?: object;
  errors?: object;
};

type GraphQLRequest = {
  query?: string;
};

const introspectionQuery = getIntrospectionQuery();

export const graphQLApi = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    graphQL: builder.mutation<GraphQLResponse, GraphQLRequest>({
      queryFn: async ({ query = introspectionQuery }, { getState }, _extraOptions, fetchWithBQ) => {
        const {
          graphiql: { endpoint: url, headers: headersStr, variables: variablesStr },
        } = getState() as RootState;

        let headers = new Headers();
        let variables = {};

        try {
          headers = parseHeaders(headersStr);

          headers.set('Content-Type', 'application/json');

          variables = parseEditorCodeToObject(variablesStr, 'GraphQL variables');
        } catch (error) {
          if (error instanceof Error) {
            return { error: { error: error.message, status: 'CUSTOM_ERROR' } };
          }

          return { error: { error: 'Unknown error', status: 'CUSTOM_ERROR' } };
        }

        const result = await fetchWithBQ({
          body: {
            query,
            variables,
          },
          headers,
          method: 'POST',
          url,
        });

        if (result.error) {
          return { error: result.error };
        }

        const data = result.data && typeof result.data === 'object' ? result.data : {};

        return { data };
      },
    }),
  }),
});

export const { useGraphQLMutation } = graphQLApi;
