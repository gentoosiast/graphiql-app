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
    url: endpoint,
  });

  return response.data;
};
