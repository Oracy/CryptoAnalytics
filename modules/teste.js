const conexao = require('./config/conexao')

BlinkTrade = conexao.BlinkTrade

// Show current informations about the currency: high, vol, buy, last, low, pair, sell, vol_brl
const currentInfo = BlinkTrade.ticker().then(function(ticker) {
  // console.log(ticker)
  console.log("Par de moedas: ", ticker.pair)
  console.log("Última compra: R$", ticker.last)
  console.log("Compra mais alta: R$", ticker.high)
  console.log("Compra mais baixa: R$", ticker.low)
  console.log("Valor atual para compra: R$", ticker.buy)
  console.log("Valor atual para venda: R$", ticker.sell)
  console.log("Comprando no valor atual, é necessário vender a: R$" + (ticker.buy*1.02).toFixed(2) + " Para ter pelo menos 1% de lucro")
})

module.exports = currentInfo







// let resetUsuarioTokenPass = (Organism) => {
//   return (req, res, next) => {
//     async.waterfall([
//       (done) => {
//         // let rPasswordToken = { resetPasswordToken: req.params.token };
//         // let rPasswordExpires = { resetPasswordExpires: { $gt: Date.now() } };
//         Organism.findOneUsuario({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, (err, usuario) => {
//           if(!usuario) {
//             res.json({success: false, message: 'Token inválido ou expirado.'});
//             return;
//           } else {

//             done(err, usuario);
//           }

//         });
//       },

//       (usuario, done) => {
//         usuario.senha = usuario.generateHash(req.body.senha);
//         usuario.resetPasswordToken = undefined;
//         usuario.resetPasswordExpires = undefined;

//         usuario.save( (err) => {
//           done(err, usuario);
//         });
//       },

//       (usuario, done) => {
//         loginUserAuto(usuario.email, usuario.senha, usuario, (err) => {
//           // console.log('AKIIII');
//           if(err) {
//             res.json({success: false, message: 'Error ao realizar o login.'});
//             return;
//           } else {
//             done(err, usuario);
//           }
//         });

//       },

//       (usuario, done) => {
//         let smtpTransport = nodemailer.createTransport('SMTP', {
//           service: 'gmail',
//           auth: {
//             user: 'kavallare@gmail.com',
//             pass: 'souzaezinho07'
//           }
//         });
//         let mailOptions = {
//           to: usuario.email,
//           from: 'Reconnet <kavallare@gmail.com>',
//           subject: 'Sua Senha de Usuário do Reconnet foi Redefinida.',
//           text: 'Olá,\n\n' + 'Este email é apenas uma confirmação de que sua senha de usuário ' + usuario.email + ' foi redefinida.\n'
//         };
//         smtpTransport.sendMail(mailOptions, (err) => {
//           res.json({success: true, message: 'Senha atualizada com sucesso.', access: usuario.nivel_acesso, tokenUsuario: usuario.tokenUsuario});
//         });
//       }
//     ], (err) => {
//         if(err) return;
//         res.json({success: false, message: 'Ocorreu um erro.'});
//     });
//   };
// }

// (usuario, done) => {
//         let smtpTransport = nodemailer.createTransport('SMTP', {
//           service: 'gmail',
//           auth: {
//             user: 'kavallare@gmail.com',
//             pass: 'souzaezinho07'
//           }
//         });
//         let mailOptions = {
//           to: usuario.email,
//           from: 'Reconnet <kavallare@gmail.com>',
//           subject: 'Sua Senha de Usuário do Reconnet foi Redefinida.',
//           text: 'Olá,\n\n' + 'Este email é apenas uma confirmação de que sua senha de usuário ' + usuario.email + ' foi redefinida.\n'
//         };
//         smtpTransport.sendMail(mailOptions, (err) => {
//           res.json({success: true, message: 'Senha atualizada com sucesso.', access: usuario.nivel_acesso, tokenUsuario: usuario.tokenUsuario});