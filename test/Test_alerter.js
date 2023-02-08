var assert = require('chai').assert
var alertInCelcius = require("../alerter")

describe("Alerter", function () {
    
    it("It should record the number of Failure", function () {
        var alertFailureCount = alertInCelcius(400);
        alertFailureCount += alertInCelcius(800);
        assert.equal(alertFailureCount, 2);
    });

});
