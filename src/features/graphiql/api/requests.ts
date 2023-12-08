import axios from 'axios';

type GraphQlRequest = {
  endpoint: string;
  headers?: Record<string, string>;
  query: string;
  variables?: Record<string, string>;
};

type GraphQLResponse = {
  data: object;
};

export const graphQLRequest = async ({
  endpoint,
  headers,
  query,
  variables,
}: GraphQlRequest): Promise<string> => {
  const response = await axios<GraphQLResponse>({
    data: {
      query,
      variables,
    },
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    method: 'post',
    url: endpoint,
  });

  return JSON.stringify(response.data.data);
};
