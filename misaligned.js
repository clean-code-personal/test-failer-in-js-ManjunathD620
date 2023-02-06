const {expect} = require('chai')

let capturedOutput = [];
console.log = function(message) {
  capturedOutput.push(message);
};

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

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

result = print_color_map();
expect(result).equals(25);

expect(test(capturedOutput)).equals(true);

console.log('All is well (maybe!)');
