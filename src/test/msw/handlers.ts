import { HttpResponse, delay, graphql } from 'msw';

import { character42Response, characterSuperUserResponse } from './mocks/characterResponses';
import { introspectionResponse } from './mocks/introspectionResponse';

export const handlers = [
  graphql.query('IntrospectionQuery', async () => {
    await delay();

    return HttpResponse.json(introspectionResponse);
  }),

  graphql.query('CharacterQuery', async ({ query, request: { headers }, variables }) => {
    const authHeader = headers.get('authorization');

    await delay();

    if (authHeader === 'Bearer SUPERUSER') {
      return HttpResponse.json(characterSuperUserResponse);
    } else if (query.includes('id: 42')) {
      return HttpResponse.json(character42Response);
    } else if (query.includes('id: $id') && variables.id === 42) {
      return HttpResponse.json(character42Response);
    }

    return HttpResponse.json({
      errors: [
        {
          message: 'Unknown error happened',
        },
      ],
    });
  }),

  graphql.query('ExampleQuery', async ({ request: { url } }) => {
    await delay();

    if (url === 'https://example.com/graphql') {
      return HttpResponse.json({
        data: {
          message: "Hi, I'm an example query!",
        },
      });
    }

    return HttpResponse.json({
      errors: [
        {
          message: 'Unknown error happened',
        },
      ],
    });
  }),
];
