import axios from 'axios';

type GraphQlRequest = {
  endpoint: string;
  headers?: object;
  query: string;
  variables?: object;
};

const REQUEST_TIMEOUT = 10000;

export const graphQLRequest = async <T>({
  endpoint,
  headers,
  query,
  variables,
}: GraphQlRequest): Promise<T> => {
  const response = await axios<T>({
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
