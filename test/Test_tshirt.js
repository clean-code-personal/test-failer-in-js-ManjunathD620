var assert = require('chai').assert
var size = require("../tshirts")


describe("Tshirts",function(){

  it("Size is not available",function(){
    assert.notEqual(size(38),'L');
  });
  
  it("Size is not Available",function(){
    assert.equal(size(-95),undefined)
  });
  
  it("Size should be less than 100 ",function(){
    assert.equal(size(259),undefined)
  });

});
