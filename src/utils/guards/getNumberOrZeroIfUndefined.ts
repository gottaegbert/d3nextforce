export const getNumberOrZeroIfUndefined = (
  maybeNumber: number | undefined | null
): number => {
  return maybeNumber ?? zero
}
const zero = 0
