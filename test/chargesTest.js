const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const Credit = require('../charges/creditType');
const Debit = require('../charges/debitType');
const Charge = require('../charges/chargeType');
const ChargeUtil = require('../charges');
const NoMethodFoundError = require('../Errors/NoMethodFoundError');

describe('Charge Types',function(){
  it('create new charge type of interface',function(){
    const charge = new Charge(100);
    expect(charge.amount).to.be.eql(100);
    assert.throws(()=>charge.charge(), NoMethodFoundError, "Method not found in the implementation.");
  });
  it('create new charge type of credit',function(){
    const charge = new Credit(100);
    expect(charge.amount).to.be.eql(100);
    expect(charge.charge()).to.be.eql(110);
  });
  it('create new charge type of debit',function(){
    const charge = new Debit(100);
    expect(charge.amount).to.be.eql(100);
    expect(charge.charge()).to.be.eql(107);
  });

  it('create new charge based on the type passed',function(){
    let charge = ChargeUtil.getChargeMethod('dd',100);
    expect(charge.amount).to.be.eql(100);
    expect(charge.charge()).to.be.eql(107);
    charge = ChargeUtil.getChargeMethod('cc',100);
    expect(charge.amount).to.be.eql(100);
    expect(charge.charge()).to.be.eql(110);
    charge = ChargeUtil.getChargeMethod('aa',100);
    expect(charge.amount).to.be.eql(100);
    assert.throws(()=>charge.charge(), NoMethodFoundError, "Method not found in the implementation.");
  });
  it('get method not found error',function(){
    const charge = new Charge(100);
    expect(ChargeUtil.isMethodNotDefined(charge,{type:'NoMethodFound'})).to.be.eql(true);
    expect(ChargeUtil.isMethodNotDefined(charge,{type:'SomeOtherError'})).to.be.eql(false);
  });
});