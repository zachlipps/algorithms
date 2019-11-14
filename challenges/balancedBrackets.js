/*
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

Examples
Input	Output
str:
"(x + y) - (4)"	true
str:
"(x + y) - (4)"	true
str:
"(((10 ) ()) ((?)(:)))"	true
str:
"[{()}]"	true
str:
"(50)("	false
str:
"[{]}"	false
*/


function isBalanced(string) {
  const leftBrackets = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === '{' || char === '[' || char === '(') {
      leftBrackets.push(char)
    } else if (char === '}' || char === ']' || char === ')') {
      let checkingLeft = leftBrackets.pop();

      if (checkingLeft === undefined) {
        return false;
      }

      if (checkingLeft === '{' && char !== '}' ) {
        return false;
      }

      if (checkingLeft === '[' && char !== ']' ) {
        return false;
      }

      if (checkingLeft === '(' && char !== ')' ) {
        return false;
      }
    }
  }
  return leftBrackets.length === 0;
}

let s1 = "(x + y) - (4)"	// true
let s2 ="(x + y) - (4)"	//true
let s3 ="(((10 ) ()) ((?)(:)))"	//true
let s4 ="[{()}]"	//true
let s5 ="(50)("	//false
let s6 ="[{]}"	//false

// console.log(isBalanced(s1) === true);
console.log(isBalanced(s2) === true);
// console.log(isBalanced(s3) === true);
// console.log(isBalanced(s4) === true);
// console.log(isBalanced(s5) === false);
// console.log(isBalanced(s6) === false);