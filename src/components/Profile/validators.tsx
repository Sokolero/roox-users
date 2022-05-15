export const required = (value) => (value ? undefined : 'field is required');
export const isEmail = (value) => (/[A-Za-z0-9]+@[a-z0-9]+\.[a-z]+/i.test(value) ? undefined : 'email is invalid');
export const lessThan = (length) => (value) => ((!value || value.length <= length) ? undefined : 'comment is too long');
export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
