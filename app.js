"use strict";
let a = 5;
let b = a.toString();
console.log("b", b);
let c = "67";
let d = parseInt(c);
console.log("d", d);
const user = {
    name: "Vasya",
    password: "12345",
};
function userToAdmin(user) {
    return {
        name: user.name,
        role: "junior",
    };
}
const admin = userToAdmin(user);
console.log("admin", admin);
