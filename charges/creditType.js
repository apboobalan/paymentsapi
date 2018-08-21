const Charge = require('./chargeType');
class Credit extends Charge {
    constructor(amount){
        super(amount);
    }
    charge(){
        return this.amount + this.amount * 0.1;
    }
};
module.exports = Credit;