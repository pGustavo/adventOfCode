/*
pass = {
password: string;
letter: string;
min: number;
max:number;
}
 */
const fs = require("fs");
const text = fs.readFileSync("day2_pt2/data.txt").toString('utf-8');
const textByLine = text.split("\n");

let jsonData = [];

const parseOne = textByLine.forEach(pass => {
    if (pass.split(' ')[2]) {
        jsonData.push({
            password: pass.split(' ')[2],
            letter: pass.split(': ')[0].split(' ')[1],
            min: pass.split(': ')[0].split(' ')[0].split('-')[0],
            max: pass.split(': ')[0].split(' ')[0].split('-')[1]
        })
    }
});

let validPass = 0;

let resultVal = jsonData.filter(passData => isValid(passData)).length;
let resultNotVal = jsonData.filter(passData => !isValid(passData)).length;

function isValid(obj) {
    if (!obj.password) {
        return;
    }
    const numRep = (obj.password.match(new RegExp(obj.letter, "g")) || []).length;
    return numRep >= obj.min && numRep <= obj.max;
}

console.log(resultVal);
//console.log(resultNotVal);
//console.log(resultVal+resultNotVal);

console.log('*******************');


