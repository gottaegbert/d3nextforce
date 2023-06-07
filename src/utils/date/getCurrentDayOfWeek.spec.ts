import { getCurrentWeekday } from './getCurrentDayOfWeek'

describe('getCurrentDayOfWeek', () => {
  it('should return the current day of the week', () => {
    const saturdayExampleDateString = '2022-08-20'
    const saturdayString = 'Saturday'

    jest.useFakeTimers().setSystemTime(new Date(saturdayExampleDateString))

    expect(getCurrentWeekday()).toEqual(saturdayString)
  })
})
