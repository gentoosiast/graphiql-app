import axios from 'axios';

type GraphQlRequest = {
  endpoint: string;
  headers?: Record<string, string>;
  query: string;
  variables?: object;
};

type GraphQLResponse = {
  data: object;
};

export const graphQLRequest = async ({
  endpoint,
  headers,
  query,
  variables,
}: GraphQlRequest): Promise<GraphQLResponse> => {
  const response = await axios<GraphQLResponse>({
    data: {
      query,
      variables: variables ?? {},
    },
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    method: 'post',
    url: endpoint,
  });

  return response.data;
};
