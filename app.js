"use strict";
class User {
    changeName() {
        User.userName = "Not Yuri";
    }
}
User.userName = "Yuri";
console.log(User.userName); // Yuri
console.log(new User().changeName()); // undefined
