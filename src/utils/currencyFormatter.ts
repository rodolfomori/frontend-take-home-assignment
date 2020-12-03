export function currencyFormatter(inputValue: number) {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3
  }).format(inputValue);

  return `${amount}`;
}
