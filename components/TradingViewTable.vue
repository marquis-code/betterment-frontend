<template>
    <div class="bg-gray-900 rounded-lg p-8 text-white">
      <!-- Header Section -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold">Forex Market Fundamental Data</h3>
      </div>
  
      <!-- TradingView Widget Section -->
      <div class="tradingview-widget-container">
        <div id="tradingview_fundamental_data"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "width": "100%",
      "height": "660",
      "plotLineColorGrowing": "rgba(60, 188, 152, 1)",
      "plotLineColorFalling": "rgba(255, 74, 104, 1)",
      "gridLineColor": "rgba(240, 243, 250, 0)",
      "scaleFontColor": "rgba(120, 123, 134, 1)",
      "belowLineFillColorGrowing": "rgba(60, 188, 152, 0.05)",
      "belowLineFillColorFalling": "rgba(255, 74, 104, 0.05)",
      "symbolActiveColor": "rgba(242, 250, 254, 1)",
      "tabs": [
        {
          "title": "Indices",
          "symbols": [
            {
              "s": "FOREXCOM:SPXUSD",
              "d": "S&P 500"
            },
            {
              "s": "FOREXCOM:NSXUSD",
              "d": "US 100"
            },
            {
              "s": "FOREXCOM:DJI",
              "d": "Dow 30"
            },
            {
              "s": "INDEX:NKY",
              "d": "Nikkei 225"
            },
            {
              "s": "INDEX:DEU30",
              "d": "DAX Index"
            },
            {
              "s": "FOREXCOM:UKXGBP",
              "d": "UK 100"
            }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Commodities",
          "symbols": [
            {
              "s": "CME_MINI:ES1!",
              "d": "E-Mini S&P"
            },
            {
              "s": "CME:6E1!",
              "d": "Euro"
            },
            {
              "s": "COMEX:GC1!",
              "d": "Gold"
            },
            {
              "s": "NYMEX:CL1!",
              "d": "Crude Oil"
            },
            {
              "s": "NYMEX:NG1!",
              "d": "Natural Gas"
            },
            {
              "s": "CBOT:ZC1!",
              "d": "Corn"
            }
          ],
          "originalTitle": "Commodities"
        },
        {
          "title": "Bonds",
          "symbols": [
            {
              "s": "CME:GE1!",
              "d": "Eurodollar"
            },
            {
              "s": "CBOT:ZB1!",
              "d": "T-Bond"
            },
            {
              "s": "CBOT:UB1!",
              "d": "Ultra T-Bond"
            },
            {
              "s": "EUREX:FGBL1!",
              "d": "Euro Bund"
            },
            {
              "s": "EUREX:FBTP1!",
              "d": "Euro BTP"
            },
            {
              "s": "EUREX:FGBM1!",
              "d": "Euro BOBL"
            }
          ],
          "originalTitle": "Bonds"
        },
        {
          "title": "Forex",
          "symbols": [
            {
              "s": "FX:EURUSD",
              "d": "EUR/USD"
            },
            {
              "s": "FX:GBPUSD",
              "d": "GBP/USD"
            },
            {
              "s": "FX:USDJPY",
              "d": "USD/JPY"
            },
            {
              "s": "FX:USDCHF",
              "d": "USD/CHF"
            },
            {
              "s": "FX:AUDUSD",
              "d": "AUD/USD"
            },
            {
              "s": "FX:USDCAD",
              "d": "USD/CAD"
            }
          ],
          "originalTitle": "Forex"
        }
      ]
    });
    document.getElementById('tradingview_fundamental_data').appendChild(script);
  });
  </script>
  
  <style scoped>
  /* Additional styling if necessary */
  </style>
  