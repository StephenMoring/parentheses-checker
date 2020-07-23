export function verifyParenthesesClosures(text){
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