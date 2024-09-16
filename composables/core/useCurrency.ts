export function useCurrency() {
  const formatToDollar = (amount) => {
    // Ensure the amount is a number
    if (isNaN(amount)) {
      return '$0.00';
    }

    // Create a formatter for USD currency
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    // Format the amount
    return formatter.format(amount);
  };

  return { formatToDollar };
}
