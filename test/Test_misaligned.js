var assert = require('chai').assert
var color = require("../misaligned")

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
        result = color.print_color_map();
        assert.equal(result, 25);
    });

    it("separator (|) are misaligned", function () {
        let capturedOutput = color.capturedOutput;
        assert.equal(test(capturedOutput),true);
    });


});
