export function formatMoney(
  value: number,
  locale: Intl.LocalesArgument = 'pt-BR',
  options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL',
  },
) {
  return value.toLocaleString(locale, options)
}
