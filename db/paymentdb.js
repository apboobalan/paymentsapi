const Payment = require('../models/paymentModal');

const persistPayment = (data,cb) =>{
    Payment.findOne({id:data.id},(err,found)=>{
        if(found!==null) return cb(409);
        const payment = new Payment(data);
        payment.save((err,savedData)=>{
            if(err) err = 400;
            cb(err,savedData)
        });
    });
};

const deletePayments = (cb) =>{
    Payment.remove({},cb);
};

module.exports = {
    persistPayment,
    deletePayments
};