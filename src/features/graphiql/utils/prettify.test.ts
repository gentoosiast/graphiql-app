import { describe, expect, it } from 'vitest';

import { graphqlPrettify } from './prettify';

describe('Prettify', () => {
  it('should format request', () => {
    const preformattedQuery = `{
  hero {
    name
  }
}`;
    const formattedByPrettifyQuery = graphqlPrettify(`{hero {
              name}}`);

    expect(formattedByPrettifyQuery).toEqual(preformattedQuery);
  });
});
