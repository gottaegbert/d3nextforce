/* eslint-disable no-magic-numbers */
import {
  defaultMessage,
  getFirstArrayEntryOrBreak,
} from './getFirstArrayEntryOrBreak'

describe('getFirstArrayEntryOrBreak()', () => {
  describe('When passed an empty array', () => {
    it('Then should throw an error with the correct message', () => {
      const errorMessage = 'Test message'
      expect(() => {
        getFirstArrayEntryOrBreak({ array: [] })
      }).toThrowError(defaultMessage)

      expect(() => {
        getFirstArrayEntryOrBreak({ array: [], errorMessage })
      }).toThrowError(errorMessage)
    })
  })

  describe('When passed a non-empty array', () => {
    test.concurrent.each([
      [{ array: ['a', 1, null, { a: 1 }] }, 'a'],
      [{ array: [undefined] }, undefined],
      [{ array: [1] }, 1],
      [{ array: [{ a: 1 }] }, { a: 1 }],
    ])('Then getFirstArrayEntryOrBreak(%p) => %p', async (obj, expected) => {
      expect(getFirstArrayEntryOrBreak(obj)).toStrictEqual(expected)
    })
  })
})
