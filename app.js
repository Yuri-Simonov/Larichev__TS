"use strict";
const str1 = "1";
const str2 = "2";
function funcTs(a, b) {
    return a + b;
}
const funcTsArrow = (a, b) => {
    return a + b;
};
console.log(funcTs(str1, str2));
console.log(funcTsArrow(str1, str2));
