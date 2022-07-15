module.exports = function check(str, bracketsConfig) {
  let resultStack = [];
  let openElement = 0;

  for (let i = 0, lenS = str.length; i < lenS; i++) {
    for (const [x, y] of bracketsConfig) {
      if (str[i] == y) {
        if (resultStack[openElement - 1] == x) {
          resultStack.pop();
          openElement--;
        } else {
          resultStack.push(str[i]);
          openElement++;
        }
      } else {
        if (str[i] == x) {
          resultStack.push(str[i]);
          openElement++;
        }
      }
    }
  }

  return !resultStack.length;
};
