import {
  IntrospectionInterfaceType,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionObjectType,
  IntrospectionTypeRef,
} from '../types/introspection';

const isIntrospectionObjectType = (value: unknown): value is IntrospectionObjectType => {
  return Boolean(value && typeof value === 'object' && Object.hasOwn(value, 'fields'));
};

const isObjectWithInterfaces = (value: unknown): value is IntrospectionObjectType => {
  return isIntrospectionObjectType(value) && value.interfaces?.length > 0;
};

const isNamedTypeRef = (type: IntrospectionTypeRef): type is IntrospectionNamedTypeRef => {
  return type && typeof type === 'object' && Object.hasOwn(type, 'name');
};

const isListTypeRef = (type: IntrospectionTypeRef): type is IntrospectionListTypeRef => {
  return type && typeof type === 'object' && Object.hasOwn(type, 'ofType');
};

const getTypeName = (type: IntrospectionTypeRef): string => {
  if (isNamedTypeRef(type) && type.name) {
    return type.name;
  }

  if (isListTypeRef(type)) {
    return getTypeName(type.ofType);
  }

  return '';
};

const getInterfaceObject = (
  type: IntrospectionTypeRef,
): IntrospectionNamedTypeRef<IntrospectionInterfaceType> | null => {
  return isObjectWithInterfaces(type) ? type.interfaces[0] : null;
};

export { getInterfaceObject, getTypeName, isIntrospectionObjectType };
