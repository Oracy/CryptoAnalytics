// REST Transport
const BlinkTradeRest = require("blinktrade").BlinkTradeRest
const BlinkTrade = new BlinkTradeRest({
  prod: true,
  currency: "BRL",
  key: "YOUR-API-KEY",
  secret: "YOUR-API-SECRET",
})

module.exports = BlinkTrade