import { isNotOrEmptyArray } from './isNotOrEmptyArray'

export const getFirstArrayEntryOrBreak = <T>({
  array,
  errorMessage,
}: {
  array: T[]
  errorMessage?: string
}): T => {
  if (isNotOrEmptyArray(array)) {
    throw new Error(errorMessage ?? defaultMessage)
  }
  return array[firstEntryIndex]
}

const firstEntryIndex = 0
export const defaultMessage = 'Tried to access first entry of empty array'
