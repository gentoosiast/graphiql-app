export const getFormMode = (state: unknown): string => {
  if (
    state &&
    typeof state === 'object' &&
    'formMode' in state &&
    typeof state.formMode === 'string' &&
    ['login', 'register'].includes(state.formMode)
  ) {
    return state.formMode;
  }

  return 'login';
};
