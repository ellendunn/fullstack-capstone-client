
export const required = value =>
  value ? undefined : 'This field is required'

export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'This field cannot be empty'

export const isTrimmed = value =>
  value.trim() === value ? undefined : 'This field cannot start or end with white space'

export const length = length => value => {
  if (length.min && value.length<length.min) {
    return `Must be at least ${length.min} characters long`
  }
  if (length.max && value.length>length.max) {
    return `Cannot exceed ${length.max} characters`
  }
}

export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Password must match'
