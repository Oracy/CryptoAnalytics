const BlinkTrade = require('./config/conexaoAPI')

// WebSocket Transport
const BlinkTradeWS = require("blinktrade").BlinkTradeWS
const BlinkTrade2 = new BlinkTradeWS({ prod: true })

countC = 1
countV = 1

BlinkTrade.myOrders().then(function(myOrders) {
  compra = []
  venda = []
  for(var x = 0; x < myOrders.OrdListGrp.length; x++){
    if (myOrders.OrdListGrp[x].Side === '1') {
      compra.push(["Ordem de Compra: " + countC,
      // "Par de moedas: " + myOrders.OrdListGrp[x].Symbol,
      "Data de Compra: " + myOrders.OrdListGrp[x].OrderDate,
      "Valor pago por 1 Moeda: " + (myOrders.OrdListGrp[x].Price/100000000).toFixed(2),
      "Valor pago pelas Moedas: " + (myOrders.OrdListGrp[x].Volume/100000000).toFixed(2),
      "Quantidade de Moedas comprada: " + (myOrders.OrdListGrp[x].CumQty/100000000).toFixed(8)])
      countC++
    }else if(myOrders.OrdListGrp[x].Side === '2'){
      venda.push(["Ordem de Venda: " + countV,
      // "Par de moedas: " + myOrders.OrdListGrp[x].Symbol,
      "Data de Venda: " + myOrders.OrdListGrp[x].OrderDate,
      "Valor vendido em Reais: " + (myOrders.OrdListGrp[x].Price/100000000).toFixed(2),
      "Quantidade de Moedas vendidas: " + (myOrders.OrdListGrp[x].CumQty/100000000).toFixed(8)],
      "Valor recebido em Reais: " + (myOrders.OrdListGrp[x].Volume/100000000).toFixed(2))
      countV++
    }
    // console.log(myOrders.OrdListGrp[x])
    // console.log("##################")
    // console.log(venda)
  }
  console.log(compra)
})



// { OrdListGrp: 
//    [ { 
//        LeavesQty: 19127985,
//        Symbol: 'BTCBRL',
//        Side: '2',
//        OrdType: '2',
//        OrderQty: 19127985,
//        Price: 395000000000,
//        OrderDate: '2017-03-17 03:33:30',
//  },
//   PageSize: 20,
//   OrdersReqID: 6198001,
//   MsgType: 'U5',
//   Page: 0 }



//        TimeInForce: '1' } ],
//   PageSize: 20,
//   OrdersReqID: 6198001,
//   MsgType: 'U5',
//   Page: 0 }

//      { ClOrdID: '5225544',
//        OrderID: 1459150292413,
//        CumQty: 19175925,
//        OrdStatus: '2',
//        LeavesQty: 0,
//        CxlQty: 0,
//        AvgPx: 378000000000,
//        Symbol: 'BTCBRL',
//        Side: '1',
//        OrdType: '2',
//        OrderQty: 19175925,
//        Price: 378000000000,
//        OrderDate: '2017-03-16 23:16:37',
//        Volume: 72484996500,
//        TimeInForce: '1' },
//   
//      { ClOrdID: '1236930',
//        OrderID: 1459150163888,
//        CumQty: 5481362,
//        OrdStatus: '2',
//        LeavesQty: 0,
//        CxlQty: 0,
//        AvgPx: 371900000000,
//        Symbol: 'BTCBRL',
//        Side: '2',
//        OrdType: '2',
//        OrderQty: 5481362,
//        Price: 371900000000,
//        OrderDate: '2017-03-09 16:43:02',
//        Volume: 20385185278,
//        TimeInForce: '1' },