const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "PLN",
  style: "currency",
  minimumFractionDigits: 0,
})

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

export function formatNumber(num: number) {
  return NUMBER_FORMATTER.format(num)
}
