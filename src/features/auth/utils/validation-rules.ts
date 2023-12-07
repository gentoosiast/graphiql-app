const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PASSWORD_REGEXP = /(?=.*\p{L})(?=.*\d)(?=.*[\p{P}\p{S}\p{M}]).{8,}/u;

function getEmailRules(requiredError: string, patternError: string): Record<string, unknown> {
  return {
    pattern: {
      message: patternError,
      value: EMAIL_REGEXP,
    },
    required: requiredError,
  };
}

function getPasswordRules(
  requiredError: string,
  lengthError: string,
  patternError: string,
): Record<string, unknown> {
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
}

export { getEmailRules, getPasswordRules };
