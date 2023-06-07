export const getCurrentWeekday = (): string => {
  const weekdayIndex = new Date().getDay()
  return weekdays[weekdayIndex]
}

export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
