import { RefObject } from 'react'

export const getElementFromRef = (
  ref: RefObject<HTMLDivElement>
): HTMLDivElement => {
  const element = ref.current

  if (element === null) {
    throw new Error('No ref on parent div')
  }

  return element
}
