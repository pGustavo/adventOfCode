const fs = require("fs");
const text = fs.readFileSync("day1_pt1/data.txt").toString('utf-8');
const textByLine = text.split("\n");
const arrayNumber =  textByLine.map(s => +s);

function rec() {
    let countA = 0;

    while (countA <= arrayNumber.length) {
        let firstA = arrayNumber[countA];
        let countB = 1;


        while (countB <= arrayNumber.length) {
            let firstB = arrayNumber[countB];
            if (firstA + firstB === 2020) {
                console.log(firstA);
                console.log(firstB);
                console.log(firstA + firstB);
                console.log(firstA * firstB);
                return;
            }
            countB++;
        }
        countA++;
    }
}

rec();

