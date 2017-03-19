const BlinkTrade = require('../config/conexao')

// Get all orders on orderbook.
const orderbookreq = BlinkTrade.orderbook().then(function(orderbook) {
  procura =[]
  oferta = []
  totalC = 0.00
  totalV = 0.00

  for(var x = 0; x < orderbook.asks.length; x++){
    procura.push([orderbook.asks[x][0], orderbook.asks[x][1]])
    if(orderbook.asks[x][0] < 3800){
      totalV += orderbook.asks[x][1]
    }
}

  for(var x = 0; x < orderbook.bids.length; x++){
    oferta.push([orderbook.bids[x][0], orderbook.bids[x][1]])
    if(orderbook.bids[x][0] < 3200){
      totalC += orderbook.bids[x][1]
    }
}


  // console.log(procura)
  // console.log(oferta)
  // console.log("Total de: " + totalC.toFixed(8) + " btc sendo compradas.")
  // console.log(procura)
  // console.log("Total de: " + totalV.toFixed(8) + " btc sendo vendidas.")
})

module.exports = orderbookreq