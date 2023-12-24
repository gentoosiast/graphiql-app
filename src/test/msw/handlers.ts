import { HttpResponse, delay, graphql } from 'msw';

import { character42Response } from './mocks/characterResponses';
import { introspectionResponse } from './mocks/introspectionResponse';

export const handlers = [
  graphql.query('IntrospectionQuery', async () => {
    await delay();

    return HttpResponse.json(introspectionResponse);
  }),

  graphql.query('CharacterQuery', async ({ query }) => {
    await delay();

    if (query.includes('id: 42')) {
      return HttpResponse.json(character42Response);
    }
  }),
];
