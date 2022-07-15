"use strict";
const a = { name: "fsd" };
assertsUser(a);
function assertsUser(obj) {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        console.log(1);
        return;
    }
    throw new Error("Не пользователь");
}
