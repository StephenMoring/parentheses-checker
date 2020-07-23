import { readFileSync } from "fs";

export function checkParentheses(text){
    let parenthesesStack = []; 
    for(let c of text){
        if (c === '('){
            parenthesesStack.push('(');
        } else if (c === ')'){
            if(parenthesesStack.pop() === undefined){
                return false;
            }
        }
    }
    return parenthesesStack.length == 0 ? true : false;
}

var text = readFileSync("./tests/test_lisp_code.txt").toString('utf-8');
console.log(checkParentheses(text));