const BlinkTrade = require('../config/conexao')

// Get informations about historic trades as much as you want
y = 3
const trades = BlinkTrade.trades({ limit: y }).then(function(trades) {
  for (var x = 0; x < y; x++) {
    var theDate = new Date(trades[x].date * 1000)
    dateString = theDate.toGMTString()

    console.log("Trade ID: ", trades[x].tid)
    console.log("Date: ", dateString)
    console.log("Price: ", trades[x].price)
    console.log("Amount: ", trades[x].amount)
    if(trades[x].side === 'sell'){
      console.log("Side: Vendeu")
    }else if (trades[x].side === 'buy') {
      console.log("Side: Comprou")
    }else{
      console.log(trades[x].side)
    }
    console.log("##############################")
  }
})

module.exports = trades