const Charge = require('../charges');
const HttpError = require('../Errors/HttpErrors');
const ChargeDB = require('../db/chargedb');
const filterOutput = require('../utils/filterOutput');

const getCharge = (req, res, next) => {
    ChargeDB.getAllCharges((err,data)=>{
        if (err) return res.send(500,HttpError(500));
        res.send(filterOutput.filterCharges(data));
    });
};

const getChargeById = (req, res, next) => {
    ChargeDB.getChargeById(req.params.id,(err,charge)=>{
        if (err) return res.send(404,HttpError(404));
        delete charge._doc._id;
        delete charge._doc.id;
        delete charge._doc.__v;
        res.send(charge);
    });
};

const addCharge = (req, res, next) => {
    const payment_id = req.params.payment_id;

    ChargeDB.findChargeType(payment_id, (err,type)=>{
        if (err) return res.send(err,HttpError(err));
        
        const payment = Charge.getChargeMethod(type,parseInt(req.params.amount));
        try{
            ChargeDB.persistCharge({id:req.params.id,payment_id:payment_id,amount:payment.charge()},(err, charge) => {
                if (err) return res.send(err,HttpError(err));
                delete charge._doc._id;
                delete charge._doc.__v;
                res.send(charge); 
            });
        }catch(e){
            if(Charge.isMethodNotDefined(payment,e)) console.log("Required Method not defined for the payment type");
            return res.send(500,HttpError(500));
        }
    });
};

const deleteCharges = (req, res, next) => {
    ChargeDB.deleteCharges((err) => {
        if (err) return res.send(500,HttpError(500));
        res.send(200,{message:"charges collection removed", code:200}); 
    });
};

module.exports = (server) => {
    server.post('/charge', addCharge);
    server.get('/charge', getCharge);
    server.get('/charge/:id', getChargeById);
    server.del('/charge', deleteCharges);
}