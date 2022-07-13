"use strict";
let input;
input = 55;
function toNum(num) {
    if (typeof num === "number") {
        console.log(1);
        return ++num;
    }
    else {
        num;
    }
}
let a = toNum(input);
console.log("a", a);
