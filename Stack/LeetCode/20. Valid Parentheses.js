var isValid = function (paren) {
  let stack = [];
  for (let i = 0; i < paren.length; i++) {
    if (paren[i] === "(" || paren[i] === "{" || paren[i] === "[") {
      stack.push(paren[i]);
    } else {
      let stackLastPop = stack.pop();
      if (stackLastPop === "(" && paren[i] === ")") {
        continue;
      } else if (stackLastPop === "{" && paren[i] === "}") {
        continue;
      } else if (stackLastPop === "[" && paren[i] === "]") {
        continue;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid("(){}[]"));
console.log(isValid("[(){}[]]"));
console.log(isValid("(]"));
console.log(isValid("[(){}[]]"));
