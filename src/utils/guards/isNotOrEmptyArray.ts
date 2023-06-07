export const isNotOrEmptyArray = (array: unknown[] | unknown): boolean => {
  return !Array.isArray(array) || !array.length // Equals array.length === 0
}
