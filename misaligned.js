let capturedOutput = [];
function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${(i * 5 + j).toString().padEnd(2)} | ${majorColors[i].padEnd(6)} | ${minorColors[j]}`);
            capturedOutput.push(`${((i * 5 + j)+1).toString().padEnd(2)} | ${majorColors[i].padEnd(6)} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

module.exports = {print_color_map,capturedOutput};
