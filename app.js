"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const user1 = new UserBuilder().setName("Yo");
const user2 = new AdminBuilder().setName("Ju");
const user = new AdminBuilder().setName("Leo");
if (user.isAdmin()) {
    console.log(user.name + " admin");
}
else {
    console.log(user.name + " user");
}
