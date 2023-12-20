import { DirectiveLocation } from '../enums';

export interface IntrospectionSchema {
  readonly description?: Maybe<string>;
  readonly directives: ReadonlyArray<IntrospectionDirective>;
  readonly mutationType: Maybe<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
  readonly queryType: IntrospectionNamedTypeRef<IntrospectionObjectType>;
  readonly subscriptionType: Maybe<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
  readonly types: ReadonlyArray<IntrospectionType>;
}

export type IntrospectionResponse = {
  data: { __schema: IntrospectionSchema };
};

export type IntrospectionType =
  | IntrospectionEnumType
  | IntrospectionInputObjectType
  | IntrospectionInterfaceType
  | IntrospectionObjectType
  | IntrospectionScalarType
  | IntrospectionUnionType;

export interface IntrospectionObjectType {
  readonly description?: Maybe<string>;
  readonly fields: ReadonlyArray<IntrospectionField>;
  readonly interfaces: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionInterfaceType>>;
  readonly kind: 'OBJECT';
  readonly name: string;
}

export interface IntrospectionInterfaceType {
  readonly description?: Maybe<string>;
  readonly fields: ReadonlyArray<IntrospectionField>;
  readonly interfaces: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionInterfaceType>>;
  readonly kind: 'INTERFACE';
  readonly name: string;
  readonly possibleTypes: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
}

export interface IntrospectionUnionType {
  readonly description?: Maybe<string>;
  readonly kind: 'UNION';
  readonly name: string;
  readonly possibleTypes: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
}

export interface IntrospectionEnumType {
  readonly description?: Maybe<string>;
  readonly enumValues: ReadonlyArray<IntrospectionEnumValue>;
  readonly kind: 'ENUM';
  readonly name: string;
}

export interface IntrospectionInputObjectType {
  readonly description?: Maybe<string>;
  readonly inputFields: ReadonlyArray<IntrospectionInputValue>;
  readonly kind: 'INPUT_OBJECT';
  readonly name: string;
}

export interface IntrospectionListTypeRef<T extends IntrospectionTypeRef = IntrospectionTypeRef> {
  readonly kind: 'LIST';
  readonly ofType: T;
}

export interface IntrospectionNonNullTypeRef<
  T extends IntrospectionTypeRef = IntrospectionTypeRef,
> {
  readonly kind: 'NON_NULL';
  readonly ofType: T;
}

export type IntrospectionTypeRef =
  | IntrospectionListTypeRef
  | IntrospectionNamedTypeRef
  | IntrospectionNonNullTypeRef<IntrospectionListTypeRef | IntrospectionNamedTypeRef>;

export type IntrospectionOutputTypeRef =
  | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
  | IntrospectionNamedTypeRef<IntrospectionOutputType>
  | IntrospectionNonNullTypeRef<
      | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
      | IntrospectionNamedTypeRef<IntrospectionOutputType>
    >;

export type IntrospectionInputTypeRef =
  | IntrospectionListTypeRef<IntrospectionInputTypeRef>
  | IntrospectionNamedTypeRef<IntrospectionInputType>
  | IntrospectionNonNullTypeRef<
      | IntrospectionListTypeRef<IntrospectionInputTypeRef>
      | IntrospectionNamedTypeRef<IntrospectionInputType>
    >;

export interface IntrospectionNamedTypeRef<T extends IntrospectionType = IntrospectionType> {
  readonly kind: T['kind'];
  readonly name: string;
}

export interface IntrospectionField {
  readonly args: ReadonlyArray<IntrospectionInputValue>;
  readonly deprecationReason: Maybe<string>;
  readonly description?: Maybe<string>;
  readonly isDeprecated: boolean;
  readonly name: string;
  readonly type: IntrospectionOutputTypeRef;
}

export interface IntrospectionInputValue {
  readonly defaultValue: Maybe<string>;
  readonly deprecationReason?: Maybe<string>;
  readonly description?: Maybe<string>;
  readonly isDeprecated?: boolean;
  readonly name: string;
  readonly type: IntrospectionInputTypeRef;
}

export interface IntrospectionEnumValue {
  readonly deprecationReason: Maybe<string>;
  readonly description?: Maybe<string>;
  readonly isDeprecated: boolean;
  readonly name: string;
}

export interface IntrospectionDirective {
  readonly args: ReadonlyArray<IntrospectionInputValue>;
  readonly description?: Maybe<string>;
  readonly isRepeatable?: boolean;
  readonly locations: ReadonlyArray<DirectiveLocation>;
  readonly name: string;
}

type Maybe<T> = T | null | undefined;

type IntrospectionOutputType =
  | IntrospectionEnumType
  | IntrospectionInterfaceType
  | IntrospectionObjectType
  | IntrospectionScalarType
  | IntrospectionUnionType;

type IntrospectionInputType =
  | IntrospectionEnumType
  | IntrospectionInputObjectType
  | IntrospectionScalarType;

interface IntrospectionScalarType {
  readonly description?: Maybe<string>;
  readonly kind: 'SCALAR';
  readonly name: string;
  readonly specifiedByURL?: Maybe<string>;
}
