import { DATE_FORMATS } from 'models'
import { format } from 'date-fns/format'

export function formatDate(date: Date | string, dateFormat: DATE_FORMATS) {
  return format(date, dateFormat)
}
