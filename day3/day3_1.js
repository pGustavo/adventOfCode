const fs = require("fs");
const text = fs.readFileSync("day3/data.txt").toString('utf-8');
const textByLine = text.split("\n");

let forest = [];
let result = 0;
let resultUn = 0;

textByLine.forEach(line => {
    let lineToPush = line.replace(/^\s+|\s+$/g, '');
    let i = 0;
    let finalLine = '';
    while (i <= 31) {
        finalLine = finalLine + lineToPush;
        i++;
    }
    forest.push(finalLine.split(''));
});

// length -> 31
// forest = [ [....#] [##...] .... ]

function goSlope(arr) {
    let right = 1;
    let down = 0;
    const len = forest.length;
    let i = 0;

    const trees = 0;

    while (i < len) {
        right = right + 3;
        down = down + 1;

        let pos = forest[down];
        let isTreePos = '';
        if (!pos) {
            return;
        }
        if (pos.length > 0) {
            isTreePos = pos[right-1];
            if (isTreePos === '#') {
                result ++;
            }
            if (isTreePos === undefined) {
                resultUn ++;
            }
        }
    }
}


goSlope(forest);
console.log(result);
console.log('len', forest.length);
console.log('lenLi', forest[0].length);
