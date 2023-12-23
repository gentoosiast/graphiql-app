export const introspectionResponse = {
  data: {
    __schema: {
      directives: [
        {
          args: [
            {
              defaultValue: null,
              description: '',
              name: 'maxAge',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'scope',
              type: {
                kind: 'ENUM',
                name: 'CacheControlScope',
                ofType: null,
              },
            },
          ],
          description: '',
          locations: ['FIELD_DEFINITION', 'OBJECT', 'INTERFACE'],
          name: 'cacheControl',
        },
        {
          args: [
            {
              defaultValue: null,
              description: 'Skipped when true.',
              name: 'if',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
            },
          ],
          description:
            'Directs the executor to skip this field or fragment when the `if` argument is true.',
          locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
          name: 'skip',
        },
        {
          args: [
            {
              defaultValue: null,
              description: 'Included when true.',
              name: 'if',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
            },
          ],
          description:
            'Directs the executor to include this field or fragment only when the `if` argument is true.',
          locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
          name: 'include',
        },
        {
          args: [
            {
              defaultValue: '"No longer supported"',
              description:
                'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).',
              name: 'reason',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          description: 'Marks an element of a GraphQL schema as no longer supported.',
          locations: ['FIELD_DEFINITION', 'ENUM_VALUE'],
          name: 'deprecated',
        },
      ],
      mutationType: null,
      queryType: {
        name: 'Query',
      },
      subscriptionType: null,
      types: [
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'id',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get a specific character by ID',
              isDeprecated: false,
              name: 'character',
              type: {
                kind: 'OBJECT',
                name: 'Character',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'page',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
                {
                  defaultValue: null,
                  description: '',
                  name: 'filter',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'FilterCharacter',
                    ofType: null,
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get the list of all characters',
              isDeprecated: false,
              name: 'characters',
              type: {
                kind: 'OBJECT',
                name: 'Characters',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'ids',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'SCALAR',
                          name: 'ID',
                          ofType: null,
                        },
                      },
                    },
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get a list of characters selected by ids',
              isDeprecated: false,
              name: 'charactersByIds',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Character',
                  ofType: null,
                },
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'id',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get a specific locations by ID',
              isDeprecated: false,
              name: 'location',
              type: {
                kind: 'OBJECT',
                name: 'Location',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'page',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
                {
                  defaultValue: null,
                  description: '',
                  name: 'filter',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'FilterLocation',
                    ofType: null,
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get the list of all locations',
              isDeprecated: false,
              name: 'locations',
              type: {
                kind: 'OBJECT',
                name: 'Locations',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'ids',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'SCALAR',
                          name: 'ID',
                          ofType: null,
                        },
                      },
                    },
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get a list of locations selected by ids',
              isDeprecated: false,
              name: 'locationsByIds',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Location',
                  ofType: null,
                },
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'id',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get a specific episode by ID',
              isDeprecated: false,
              name: 'episode',
              type: {
                kind: 'OBJECT',
                name: 'Episode',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'page',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
                {
                  defaultValue: null,
                  description: '',
                  name: 'filter',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'FilterEpisode',
                    ofType: null,
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get the list of all episodes',
              isDeprecated: false,
              name: 'episodes',
              type: {
                kind: 'OBJECT',
                name: 'Episodes',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: null,
                  description: '',
                  name: 'ids',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'SCALAR',
                          name: 'ID',
                          ofType: null,
                        },
                      },
                    },
                  },
                },
              ],
              deprecationReason: null,
              description: 'Get a list of episodes selected by ids',
              isDeprecated: false,
              name: 'episodesByIds',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Episode',
                  ofType: null,
                },
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Query',
          possibleTypes: null,
        },
        {
          description:
            'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
          enumValues: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'SCALAR',
          name: 'ID',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: 'The id of the character.',
              isDeprecated: false,
              name: 'id',
              type: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The name of the character.',
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: "The status of the character ('Alive', 'Dead' or 'unknown').",
              isDeprecated: false,
              name: 'status',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The species of the character.',
              isDeprecated: false,
              name: 'species',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The type or subspecies of the character.',
              isDeprecated: false,
              name: 'type',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description:
                "The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').",
              isDeprecated: false,
              name: 'gender',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: "The character's origin location",
              isDeprecated: false,
              name: 'origin',
              type: {
                kind: 'OBJECT',
                name: 'Location',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: "The character's last known location",
              isDeprecated: false,
              name: 'location',
              type: {
                kind: 'OBJECT',
                name: 'Location',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description:
                "Link to the character's image.\nAll images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.",
              isDeprecated: false,
              name: 'image',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'Episodes in which this character appeared.',
              isDeprecated: false,
              name: 'episode',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Episode',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'Time at which the character was created in the database.',
              isDeprecated: false,
              name: 'created',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Character',
          possibleTypes: null,
        },
        {
          description:
            'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
          enumValues: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'SCALAR',
          name: 'String',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: 'The id of the location.',
              isDeprecated: false,
              name: 'id',
              type: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The name of the location.',
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The type of the location.',
              isDeprecated: false,
              name: 'type',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The dimension in which the location is located.',
              isDeprecated: false,
              name: 'dimension',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'List of characters who have been last seen in the location.',
              isDeprecated: false,
              name: 'residents',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Character',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'Time at which the location was created in the database.',
              isDeprecated: false,
              name: 'created',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Location',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: 'The id of the episode.',
              isDeprecated: false,
              name: 'id',
              type: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The name of the episode.',
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The air date of the episode.',
              isDeprecated: false,
              name: 'air_date',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The code of the episode.',
              isDeprecated: false,
              name: 'episode',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'List of characters who have been seen in the episode.',
              isDeprecated: false,
              name: 'characters',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Character',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'Time at which the episode was created in the database.',
              isDeprecated: false,
              name: 'created',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Episode',
          possibleTypes: null,
        },
        {
          description:
            'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
          enumValues: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'SCALAR',
          name: 'Int',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: null,
          inputFields: [
            {
              defaultValue: null,
              description: '',
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'status',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'species',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'type',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'gender',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          interfaces: null,
          kind: 'INPUT_OBJECT',
          name: 'FilterCharacter',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'info',
              type: {
                kind: 'OBJECT',
                name: 'Info',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'results',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Character',
                  ofType: null,
                },
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Characters',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: 'The length of the response.',
              isDeprecated: false,
              name: 'count',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The amount of pages.',
              isDeprecated: false,
              name: 'pages',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'Number of the next page (if it exists)',
              isDeprecated: false,
              name: 'next',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'Number of the previous page (if it exists)',
              isDeprecated: false,
              name: 'prev',
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Info',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: null,
          inputFields: [
            {
              defaultValue: null,
              description: '',
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'type',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'dimension',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          interfaces: null,
          kind: 'INPUT_OBJECT',
          name: 'FilterLocation',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'info',
              type: {
                kind: 'OBJECT',
                name: 'Info',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'results',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Location',
                  ofType: null,
                },
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Locations',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: null,
          inputFields: [
            {
              defaultValue: null,
              description: '',
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              defaultValue: null,
              description: '',
              name: 'episode',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          interfaces: null,
          kind: 'INPUT_OBJECT',
          name: 'FilterEpisode',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'info',
              type: {
                kind: 'OBJECT',
                name: 'Info',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'results',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Episode',
                  ofType: null,
                },
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: 'Episodes',
          possibleTypes: null,
        },
        {
          description:
            'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: 'A list of all types supported by this server.',
              isDeprecated: false,
              name: 'types',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__Type',
                      ofType: null,
                    },
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'The type that query operations will be rooted at.',
              isDeprecated: false,
              name: 'queryType',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description:
                'If this server supports mutation, the type that mutation operations will be rooted at.',
              isDeprecated: false,
              name: 'mutationType',
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description:
                'If this server support subscription, the type that subscription operations will be rooted at.',
              isDeprecated: false,
              name: 'subscriptionType',
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: 'A list of all directives supported by this server.',
              isDeprecated: false,
              name: 'directives',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__Directive',
                      ofType: null,
                    },
                  },
                },
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: '__Schema',
          possibleTypes: null,
        },
        {
          description:
            'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'kind',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'ENUM',
                  name: '__TypeKind',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'description',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [
                {
                  defaultValue: 'false',
                  description: null,
                  name: 'includeDeprecated',
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                },
              ],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'fields',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Field',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'interfaces',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Type',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'possibleTypes',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Type',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [
                {
                  defaultValue: 'false',
                  description: null,
                  name: 'includeDeprecated',
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                },
              ],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'enumValues',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__EnumValue',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'inputFields',
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                    ofType: null,
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'ofType',
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: '__Type',
          possibleTypes: null,
        },
        {
          description: 'An enum describing what kind of type a given `__Type` is.',
          enumValues: [
            {
              deprecationReason: null,
              description: 'Indicates this type is a scalar.',
              isDeprecated: false,
              name: 'SCALAR',
            },
            {
              deprecationReason: null,
              description:
                'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
              isDeprecated: false,
              name: 'OBJECT',
            },
            {
              deprecationReason: null,
              description:
                'Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.',
              isDeprecated: false,
              name: 'INTERFACE',
            },
            {
              deprecationReason: null,
              description: 'Indicates this type is a union. `possibleTypes` is a valid field.',
              isDeprecated: false,
              name: 'UNION',
            },
            {
              deprecationReason: null,
              description: 'Indicates this type is an enum. `enumValues` is a valid field.',
              isDeprecated: false,
              name: 'ENUM',
            },
            {
              deprecationReason: null,
              description:
                'Indicates this type is an input object. `inputFields` is a valid field.',
              isDeprecated: false,
              name: 'INPUT_OBJECT',
            },
            {
              deprecationReason: null,
              description: 'Indicates this type is a list. `ofType` is a valid field.',
              isDeprecated: false,
              name: 'LIST',
            },
            {
              deprecationReason: null,
              description: 'Indicates this type is a non-null. `ofType` is a valid field.',
              isDeprecated: false,
              name: 'NON_NULL',
            },
          ],
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'ENUM',
          name: '__TypeKind',
          possibleTypes: null,
        },
        {
          description: 'The `Boolean` scalar type represents `true` or `false`.',
          enumValues: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'SCALAR',
          name: 'Boolean',
          possibleTypes: null,
        },
        {
          description:
            'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'description',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'args',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__InputValue',
                      ofType: null,
                    },
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'type',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'isDeprecated',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'deprecationReason',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: '__Field',
          possibleTypes: null,
        },
        {
          description:
            'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'description',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'type',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description:
                'A GraphQL-formatted string representing the default value for this input value.',
              isDeprecated: false,
              name: 'defaultValue',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: '__InputValue',
          possibleTypes: null,
        },
        {
          description:
            'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'description',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'isDeprecated',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'deprecationReason',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: '__EnumValue',
          possibleTypes: null,
        },
        {
          description:
            "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          enumValues: null,
          fields: [
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'name',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'description',
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'locations',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'ENUM',
                      name: '__DirectiveLocation',
                      ofType: null,
                    },
                  },
                },
              },
            },
            {
              args: [],
              deprecationReason: null,
              description: null,
              isDeprecated: false,
              name: 'args',
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__InputValue',
                      ofType: null,
                    },
                  },
                },
              },
            },
          ],
          inputFields: null,
          interfaces: [],
          kind: 'OBJECT',
          name: '__Directive',
          possibleTypes: null,
        },
        {
          description:
            'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
          enumValues: [
            {
              deprecationReason: null,
              description: 'Location adjacent to a query operation.',
              isDeprecated: false,
              name: 'QUERY',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a mutation operation.',
              isDeprecated: false,
              name: 'MUTATION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a subscription operation.',
              isDeprecated: false,
              name: 'SUBSCRIPTION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a field.',
              isDeprecated: false,
              name: 'FIELD',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a fragment definition.',
              isDeprecated: false,
              name: 'FRAGMENT_DEFINITION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a fragment spread.',
              isDeprecated: false,
              name: 'FRAGMENT_SPREAD',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an inline fragment.',
              isDeprecated: false,
              name: 'INLINE_FRAGMENT',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a variable definition.',
              isDeprecated: false,
              name: 'VARIABLE_DEFINITION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a schema definition.',
              isDeprecated: false,
              name: 'SCHEMA',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a scalar definition.',
              isDeprecated: false,
              name: 'SCALAR',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an object type definition.',
              isDeprecated: false,
              name: 'OBJECT',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a field definition.',
              isDeprecated: false,
              name: 'FIELD_DEFINITION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an argument definition.',
              isDeprecated: false,
              name: 'ARGUMENT_DEFINITION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an interface definition.',
              isDeprecated: false,
              name: 'INTERFACE',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to a union definition.',
              isDeprecated: false,
              name: 'UNION',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an enum definition.',
              isDeprecated: false,
              name: 'ENUM',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an enum value definition.',
              isDeprecated: false,
              name: 'ENUM_VALUE',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an input object type definition.',
              isDeprecated: false,
              name: 'INPUT_OBJECT',
            },
            {
              deprecationReason: null,
              description: 'Location adjacent to an input object field definition.',
              isDeprecated: false,
              name: 'INPUT_FIELD_DEFINITION',
            },
          ],
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'ENUM',
          name: '__DirectiveLocation',
          possibleTypes: null,
        },
        {
          description: '',
          enumValues: [
            {
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'PUBLIC',
            },
            {
              deprecationReason: null,
              description: '',
              isDeprecated: false,
              name: 'PRIVATE',
            },
          ],
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'ENUM',
          name: 'CacheControlScope',
          possibleTypes: null,
        },
        {
          description: 'The `Upload` scalar type represents a file upload.',
          enumValues: null,
          fields: null,
          inputFields: null,
          interfaces: null,
          kind: 'SCALAR',
          name: 'Upload',
          possibleTypes: null,
        },
      ],
    },
  },
};
