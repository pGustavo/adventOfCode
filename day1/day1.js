const fs = require("fs");
const text = fs.readFileSync("day1/data.txt").toString('utf-8');
const textByLine = text.split("\n");

let test = [];
let result = null
let number1 = null
let number2 = null

function sum(arr, pos) {
    for(let i = pos; i < arr.length - pos; i++) {
        test.push(arr[i] + arr[i+1]);
        if (arr[i] + arr[i+1] === 2020) {
            number1 = arr[i];
            number2 = arr[i+1];
            result = arr[i] * arr[i+1];
            console.log(result);
        } else {
            arr.slice(1);
        }
    }
}

function recursive(arr) {
    arr.forEach(number => {
     sum(arr, arr.indexOf(number));
    });
    console.log('sums made: ', test.length);
}

recursive(textByLine);
