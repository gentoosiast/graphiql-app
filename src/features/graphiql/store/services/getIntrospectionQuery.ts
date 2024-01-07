export interface IntrospectionOptions {
  /**
   * Whether to include descriptions in the introspection result.
   * Default: true
   */
  descriptions?: boolean;

  /**
   * Whether to include `isRepeatable` flag on directives.
   * Default: false
   */
  directiveIsRepeatable?: boolean;

  /**
   * Whether target GraphQL server support deprecation of input values.
   * Default: false
   */
  inputValueDeprecation?: boolean;

  /**
   * Whether to include `description` field on schema.
   * Default: false
   */
  schemaDescription?: boolean;

  /**
   * Whether to include `specifiedByURL` in the introspection result.
   * Default: false
   */
  specifiedByUrl?: boolean;
}

/**
 * Produce the GraphQL query recommended for a full schema introspection.
 * Accepts optional IntrospectionOptions.
 */
export function getIntrospectionQuery(options?: IntrospectionOptions): string {
  const optionsWithDefault = {
    descriptions: true,
    directiveIsRepeatable: false,
    inputValueDeprecation: false,
    schemaDescription: false,
    specifiedByUrl: false,
    ...options,
  };

  const descriptions = optionsWithDefault.descriptions ? 'description' : '';
  const specifiedByUrl = optionsWithDefault.specifiedByUrl ? 'specifiedByURL' : '';
  const directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? 'isRepeatable' : '';
  const schemaDescription = optionsWithDefault.schemaDescription ? descriptions : '';

  function inputDeprecation(str: string): string {
    return optionsWithDefault.inputValueDeprecation ? str : '';
  }

  return `
    query IntrospectionQuery {
      __schema {
        ${schemaDescription}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${descriptions}
          ${directiveIsRepeatable}
          locations
          args${inputDeprecation('(includeDeprecated: true)')} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${descriptions}
      ${specifiedByUrl}
      fields(includeDeprecated: true) {
        name
        ${descriptions}
        args${inputDeprecation('(includeDeprecated: true)')} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${inputDeprecation('(includeDeprecated: true)')} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${descriptions}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${descriptions}
      type { ...TypeRef }
      defaultValue
      ${inputDeprecation('isDeprecated')}
      ${inputDeprecation('deprecationReason')}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
