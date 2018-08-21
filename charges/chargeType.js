const NoMethodFoundError = require('../Errors/NoMethodFoundError');
class Charge {
    constructor(amount) {
        this.amount = amount;
    }
    charge(){
        throw new NoMethodFoundError();
    }
}

module.exports = Charge;
