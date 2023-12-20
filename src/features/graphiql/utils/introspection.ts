import {
  IntrospectionInterfaceType,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionObjectType,
  IntrospectionTypeRef,
} from '../types/introspection';

const isIntrospectionObjectType = (object: unknown): object is IntrospectionObjectType => {
  return !!(object as IntrospectionObjectType).fields;
};

const isObjectWithInterfaces = (object: unknown): object is IntrospectionObjectType => {
  return (object as IntrospectionObjectType).interfaces?.length > 0;
};

const getTypeName = (type: IntrospectionTypeRef): string => {
  return (
    (type as IntrospectionNamedTypeRef)?.name ??
    ((type as IntrospectionListTypeRef)?.ofType as IntrospectionNamedTypeRef)?.name ??
    ''
  );
};

const getIterfaceObject = (
  type: IntrospectionTypeRef,
): IntrospectionNamedTypeRef<IntrospectionInterfaceType> | null => {
  return isObjectWithInterfaces(type) ? type.interfaces[0] : null;
};

export { getIterfaceObject, getTypeName, isIntrospectionObjectType };
