var assert = require('chai').assert
var size = require("../test")


describe("Tshirts",function(){

  it("Size is not available",function(){
    assert.notEqual(size(38),'L');
  });

});
