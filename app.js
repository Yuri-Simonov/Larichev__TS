"use strict";
function narr(id) {
    if (typeof id === "string") {
        console.log(id, " = string");
    }
    else {
        console.log(id, " = number | boolean");
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function multiple(a, b) {
    if (typeof a === typeof b) {
        console.log(typeof a);
    }
    else {
        console.log("not right");
    }
}
multiple(1, 2);
