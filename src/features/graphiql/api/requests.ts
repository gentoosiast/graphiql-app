import axios from 'axios';

type GraphQlRequest = {
  endpoint: string;
  headers?: object;
  query: string;
  variables?: object;
};

type GraphQLResponse = {
  data: object;
};

const REQUEST_TIMEOUT = 10000;

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
      ...headers,
      'content-type': 'application/json',
    },
    method: 'post',
    timeout: REQUEST_TIMEOUT,
    url: endpoint,
  });

  return response.data;
};
