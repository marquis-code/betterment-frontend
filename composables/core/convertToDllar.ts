export const formatNumberAsDollar = (number) => {
    return number?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }