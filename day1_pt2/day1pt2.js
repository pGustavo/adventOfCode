const fs = require("fs");
const text = fs.readFileSync("day1_pt2/data.txt").toString('utf-8');
const textByLine = text.split("\n");
const arrayNumber = textByLine.map(s => +s);

function rec() {
    let countA = 0;

    while (countA <= arrayNumber.length) {
        let firstA = arrayNumber[countA];
        let countB = 1;


        while (countB <= arrayNumber.length) {
            let firstB = arrayNumber[countB];
            let countC = 2;
            while (countC <= arrayNumber.length) {
                let firstC = arrayNumber[countC];
                if (firstA + firstB + firstC === 2020) {
                    console.log(firstA);
                    console.log(firstB);
                    console.log(firstC);
                    console.log(firstA + firstB + firstC);
                    console.log(firstA * firstB * firstC);
                    return;
                }
                countC++;
            }
            countB++;
        }
        countA++;
    }
}

rec();

