import { verifyParenthesesClosures } from './checker.js';
import { readFileSync } from "fs";

process.argv.shift();
process.argv.shift();

var fileToCheck = process.argv.pop();
if(fileToCheck === undefined){
    fileToCheck = "test_lisp_code.txt";
}

var text = readFileSync('./tests/' + fileToCheck).toString('utf-8');
console.log(verifyParenthesesClosures(text));