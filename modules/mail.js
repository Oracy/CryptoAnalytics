const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'YOUR-MAIL',
        pass: 'YOUR-PWD',
    },
})
function email(subject, message) {
    const mailOptions = {
        from: 'YOUR-MAIL',
        to: 'YOUR-MAIL',
        subject,
        html: message
}
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
})
}
module.exports = email
