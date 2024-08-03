export function formatPercentage(
  percentageNumber: number,
  locale: string | string[] | undefined = 'pt-BR',
  options?: Intl.NumberFormatOptions,
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 2,
    ...options,
  })

  return formatter.format(percentageNumber)
}
