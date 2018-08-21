const Charge = require('../models/chargeModal');
const Payment = require('../models/paymentModal');

const persistCharge = (data,cb) =>{
    Charge.findOne({id:data.id},(err,found)=>{
        if(found!==null) return cb(409);
        const charge = new Charge(data);
        charge.save((err,savedData)=>{
            if(err) err = 400;
            cb(err,savedData)
        });
    });
};

const findChargeType = (id,cb) => {
    Payment.findOne({id},(err,data)=>{
        if (err || data==null) err = 404;
        let type = data==null? undefined:data.type;
        cb(err, type);
    })
};

const getAllCharges = (cb) => {
    Charge.find((err,data)=>{
        cb(err,data);
    });
};

const getChargeById = (id,cb) => {
    Charge.findOne({id:id},(err,data)=>{
        if (err || data==null) err = 404;
        cb(err,data);
    });
};

const deleteCharges = (cb) =>{
    Charge.remove({},cb);
};

module.exports = {
    persistCharge,
    findChargeType,
    getAllCharges,
    getChargeById,
    deleteCharges
};