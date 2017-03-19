const BlinkTrade = require('../config/conexao')
const email = require('./mail')
const util = require('util')

// Show current informations about the currency: high, vol, buy, last, low, pair, sell, vol_brl
const currentInfo = BlinkTrade.ticker().then(function(ticker) {
  // console.log(ticker)
  // console.log("Par de moedas: ", ticker.pair)
  // console.log("Última compra: R$", ticker.last)
  // console.log("Compra mais alta: R$", ticker.high)
  // console.log("Compra mais baixa: R$", ticker.low)
  // console.log("Valor atual para compra: R$", ticker.sell)
  // console.log("Valor atual para venda: R$", ticker.buy)
  // console.log("Comprando no valor atual, é necessário vender a: R$" + (ticker.sell*1.02).toFixed(2) + " Para ter pelo menos 1% de lucro")
  
  // Enviar email de acordo com sua necessidade.
  const message = `O preço atual está abaixo dos (PreçoAtual),
  valor atual: R$ ${ticker.sell} Par de moedas: ${ticker.pair}` +
  ` </br>`+
  `Última <b>compra</b>: R$ ${ticker.last}` +
  ` </br>`+
  `Compra mais <b>alta</b>: R$ ${ticker.high}` +
  ` </br>`+
  `Compra mais <b>baixa</b>: R$ ${ticker.low}` +
  ` </br>`+
  `Valor atual para <b>compra</b>: R$ ${ticker.sell}` +
  ` </br>`+
  `Valor atual para <b>venda</b>: R$ ${ticker.buy}` +
  ` </br>`+
  `Comprando no valor atual, é necessário vender a: R$ ${(ticker.sell*1.02).toFixed(2)}  Para ter pelo menos 1% de lucro`

  const subject = `Valor BTC em ${ticker.sell}`

  if(ticker.sell < 3900) email(subject, message)
})

module.exports = currentInfo