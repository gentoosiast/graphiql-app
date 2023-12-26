export const introspectionResponse = {
  data: {
    __schema: {
      directives: [],
      mutationType: null,
      queryType: { kind: 'OBJECT' as const, name: 'Query' },
      subscriptionType: null,
      types: [
        {
          description: 'Type1 description',
          fields: [
            {
              args: [],
              description: 'field1 description',
              name: 'field1',
              type: {
                kind: 'SCALAR' as const,
                name: 'field1Type',
                ofType: null,
              },
            },
          ],
          kind: 'SCALAR' as const,
          name: 'Type1',
          possibleTypes: [],
        },
        { kind: 'SCALAR' as const, name: 'Type2', possibleTypes: [] },
      ],
    },
  },
};
