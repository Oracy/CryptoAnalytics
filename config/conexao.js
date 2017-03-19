// Start conection with BlinkTrade API
const BlinkTradeRest = require("blinktrade").BlinkTradeRest;
const BlinkTrade = new BlinkTradeRest({
  prod: true,
  currency: "BRL",
})

module.exports = BlinkTrade