const Charge = require('../charges/chargeType');
const Debit = require('../charges/debitType');
const Credit = require('../charges/creditType');

const getChargeMethod = (type, amount) => {
    const chargeMethods = {
        "dd":new Debit(amount),
        "cc":new Credit(amount)
    };
    return chargeMethods[type] || new Charge(amount);
};

const isMethodNotDefined = (payment,e) => {
    return (payment instanceof Charge) && e.type == "NoMethodFound";
};

module.exports = {
    getChargeMethod,
    isMethodNotDefined
};