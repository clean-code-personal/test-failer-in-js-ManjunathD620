var assert = require('chai').assert
var print_color_map = require("../misaligned")


let capturedOutput = [];
console.log = function (message) {
    capturedOutput.push(message);
};

function test(color) {

    let allignPos1 = color[16].indexOf("|"), allignPos2 = color[16].indexOf("|", allignPos1 + 1);

    let k = color[0].length;
    for (let i = 0; i < color.length; i++) {
        if (color[i].charAt(allignPos1) == "|" && color[i].charAt(allignPos2) == "|")
            continue;
        else
            return false;
    }
    return true;

}

describe("Misaligned", function () {

   
    it("Total Number of color pair should be 25 ",function(){
        result = print_color_map();
        assert.equal(result, 25);
    });

    it("separator (|) are misaligned", function () {
        assert.equal(test(capturedOutput),true);
    });


});
