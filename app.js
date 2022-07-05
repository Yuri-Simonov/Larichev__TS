"use strict";
const user = {
    name: "Yuri",
    surname: "Simonov",
    age: "26",
};
function getFullName(userEntities) {
    console.log("user", userEntities.name, userEntities.surname);
}
getFullName(user);
