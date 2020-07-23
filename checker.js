export function verifyParenthesesClosures(text){
    const parenthesesStack = []; 
    for(const char of text){
        if (char === '('){
            parenthesesStack.push('(');
        } else if (char === ')'){
            if(!parenthesesStack.pop()){
                return false;
            }
        }
    }
    return !parenthesesStack.length;
}