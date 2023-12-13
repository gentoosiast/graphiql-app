const EMAIL_REGEXP = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;

const PASSWORD_REGEXP = /(?=.*\p{L})(?=.*\d)(?=.*[\p{P}\p{S}\p{M}]).{8,}/u;

const getEmailRules = (requiredError: string, patternError: string): Record<string, unknown> => {
  return {
    pattern: {
      message: patternError,
      value: EMAIL_REGEXP,
    },
    required: requiredError,
  };
};

const getPasswordRules = (
  requiredError: string,
  lengthError: string,
  patternError: string,
): Record<string, unknown> => {
  return {
    minLength: {
      message: lengthError,
      value: 8,
    },
    pattern: {
      message: patternError,
      value: PASSWORD_REGEXP,
    },
    required: requiredError,
  };
};

const getConfirmPasswordRules = (
  password: string,
  requiredError: string,
  notMatchError: string,
): Record<string, unknown> => {
  return {
    required: requiredError,
    validate: (value: string) => value === password || notMatchError,
  };
};

export { getConfirmPasswordRules, getEmailRules, getPasswordRules };
