import dayjs from 'dayjs'

export const mintingNow = (endTime: string): boolean => {
  return endTime.length > 6 && dayjs().isBefore(dayjs(endTime))
}
