const Charge = require('./chargeType');
class Debit extends Charge {
    constructor(amount){
        super(amount);
    }
    charge(){
        return this.amount + this.amount * 0.07;
    }
};
module.exports = Debit;