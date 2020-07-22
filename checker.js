import { readFileSync } from "fs";
var text = readFileSync("./test_lisp_code.txt").toString('utf-8');
console.log(text);