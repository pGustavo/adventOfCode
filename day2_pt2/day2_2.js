/*
pass = {
password: string;
letter: string;
min: number;
max:number;
}
 */
const fs = require("fs");
const text = fs.readFileSync("day2/data.txt").toString('utf-8');
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
    return obj.password[obj.min-1] === obj.letter && obj.password[obj.max-1] !== obj.letter ||
           obj.password[obj.min-1] !== obj.letter && obj.password[obj.max-1] === obj.letter;
}

console.log(resultVal);

