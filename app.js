"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("Vasya");
console.log("user", user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
console.log("admin", admin);
