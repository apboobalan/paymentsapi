const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    "id":{
        type:String,
        required:[true,'id is required for adding payment!']},
    "name":{
        type:String,
        required:[true,'name is required for adding payment!']},
    "type":{
        type:String, required:[true,'payment type should be of cc or dd!'],
        validate: {
            validator: function(v) { return v==="cc" || v==="dd"; },
            message: props => `${props.value} is not a payment type!`}}, // cc or dd
    "iban":{
        type:String,
        required:[function(){return this.type==="dd"},"iban is required for dd payment type"]}, // only for dd
    "expiry": {
        type:Date,
        required:[function(){return this.type==="cc"},"expiry is required for dd payment type"]},   // only for cc
    "cc":{
        type:String,
        required:[function(){return this.type==="cc"},"cc is required for dd payment type"]}, // only for cc
    "ccv":{
        type:String,
        required:[function(){return this.type==="cc"},"ccv is required for dd payment type"]}  // only for cc
});
 module.exports = mongoose.model('Payment', PaymentSchema);