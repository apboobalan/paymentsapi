const mongoose = require('mongoose');
const ChargeSchema = new mongoose.Schema({
    "id":{
        type:String,
        required:[true,'id is required for adding charge!']},
    "payment_id":{
        type:String,
        required:[true,'payment_id is required for adding charge!']},
    "amount":{
        type:Number,
        required:[true,'amount is required for adding charge!']},
});
 module.exports = mongoose.model('Charge', ChargeSchema);