<template>
    <div class="bg-gray-900 rounded-lg p-4">
      <div class="tradingview-widget-container">
        <div id="tradingview_ticker"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "BINANCE:BTCUSDT",
          "title": "Bitcoin"
        },
        {
          "proName": "BINANCE:ETHUSDT",
          "title": "Ethereum"
        },
        {
          "proName": "BINANCE:BNBUSDT",
          "title": "Binance Coin"
        },
        {
          "proName": "BINANCE:ADAUSDT",
          "title": "Cardano"
        },
        {
          "proName": "BINANCE:XRPUSDT",
          "title": "Ripple"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    });
    document.getElementById('tradingview_ticker').appendChild(script);
  });
  </script>
  
  <style scoped>
  /* Add any additional styling if necessary */
  </style>
  