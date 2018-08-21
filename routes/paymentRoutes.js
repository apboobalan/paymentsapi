const PaymentDB = require('../db/paymentdb');
const HttpError = require('../Errors/HttpErrors');

const addPayment = (req, res, next) => {
    PaymentDB.persistPayment(req.params,(err, payment) => {
        if (err) return res.send(err,HttpError(err));
        delete payment._doc._id;
        delete payment._doc.__v;
        res.send(payment); 
    });
};

const deletePayments = (req, res, next) => {
    PaymentDB.deletePayments((err) => {
        if (err) return res.send(500,HttpError(500));
        res.send(200,{message:"payments collection removed", code:200}); 
    });
};

module.exports = (server) => {
    server.post('/payment', addPayment);
    server.del('/payment', deletePayments);
}