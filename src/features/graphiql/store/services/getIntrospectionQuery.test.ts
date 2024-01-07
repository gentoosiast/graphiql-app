import { describe, expect, it } from 'vitest';

import { getIntrospectionQuery } from './getIntrospectionQuery';

describe('getIntrospectionQuery', () => {
  it('should return a query string based on the passed options if any', () => {
    const query = getIntrospectionQuery({
      descriptions: false,
      directiveIsRepeatable: true,
      inputValueDeprecation: true,
      schemaDescription: true,
      specifiedByUrl: true,
    });

    expect(query).toContain('specifiedByURL');
    expect(query).toContain('isRepeatable');
    expect(query).toContain('(includeDeprecated: true)');
    expect(query).not.toContain('description');
  });
});
