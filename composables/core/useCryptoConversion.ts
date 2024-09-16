import { computed } from 'vue';

// Example exchange rates (You can replace these with real-time rates from an API)
const exchangeRates = {
  BTC: 0.000025,   // 1 USD = 0.000025 BTC (example rate)
  USDT: 1,         // 1 USD = 1 USDT
  ETH: 0.00038,    // 1 USD = 0.00038 ETH (example rate)
};

export function useCryptoConversion(usdAmount: number) {
  // Computed values to convert USD to BTC, USDT, and ETH
  const btcValue = computed(() => (usdAmount * exchangeRates.BTC).toFixed(8)); // BTC with 8 decimal places
  const usdtValue = computed(() => (usdAmount * exchangeRates.USDT).toFixed(2)); // USDT with 2 decimal places
  const ethValue = computed(() => (usdAmount * exchangeRates.ETH).toFixed(8)); // ETH with 8 decimal places

  return {
    btcValue,     // Converted value to BTC
    usdtValue,    // Converted value to USDT
    ethValue,     // Converted value to ETH
  };
}
