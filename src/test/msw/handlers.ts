import { HttpResponse, graphql } from 'msw';

import { introspectionResponse } from './mocks/introspectionResponse';

export const handlers = [
  graphql.query('IntrospectionQuery', () => {
    return HttpResponse.json(introspectionResponse);
  }),
];
