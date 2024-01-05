import { describe, expect, it } from 'vitest';

import { graphqlPrettify } from './prettify';

describe('I18NProvider', () => {
  it('should prettify request', () => {
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
