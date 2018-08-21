const chai = require('chai');
const expect = chai.expect;
const HttpError = require('../Errors/HttpErrors');

describe('Http Error types',function(){
  it('Get appropriate error message for the 500 type',function(){
    expect(HttpError(500)).to.be.eql({ "message" : "Internal server error", "code": 500 });
  });
  it('Get appropriate error message for the 400 type',function(){
    expect(HttpError(400)).to.be.eql({ "message" : "Invalid parameters", "code": 400 });
  });
  it('Get appropriate error message for the 404 type',function(){
    expect(HttpError(404)).to.be.eql({ "message" : "Resource doesn't exist", "code": 404 });
  });
  it('Get appropriate error message for the 409 type',function(){
    expect(HttpError(409)).to.be.eql({ "message" : "Data conflict", "code": 409 });
  });
});