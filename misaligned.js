const {expect} = require('chai')

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

result = print_color_map();
expect(result).equals(25);

const expectedOutput = [
    "1 | White | Blue",
    "2 | White | Orange",
    "3 | White | Green",
    "4 | White | Brown",
    "5 | White | Slate",
    "6 | Red | Blue",
    "7 | Red | Orange",
"8 | Red | Green",
"9 | Red | Brown",
"10 | Red | Slate",
"11 | Black | Blue",
"12 | Black | Orange",
"13 | Black | Green",
"14 | Black | Brown",
"15 | Black | Slate",
"16 | Yellow | Blue",
"17 | Yellow | Orange",
"18 | Yellow | Green",
"19 | Yellow | Brown",
"20 | Yellow | Slate",
"21 | Violet | Blue",
"22 | Violet | Orange",
"23 | Violet | Green",
"24 | Violet | Brown",
"25 | Violet | Slate"
  ];

  
  let capturedOutput = [];
  const consoleLog = console.log;
  console.log = (...args) => {
    capturedOutput.push(args.join(" "));
  };
  
  print_color_map();
  
  expect(capturedOutput).deep.equals(expectedOutput);
  
  console.log = consoleLog;


console.log('All is well (maybe!)');
