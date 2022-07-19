"use strict";
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkils) {
        if (typeof skillOrSkils === "string") {
            this.skills = this.skills.concat(skillOrSkils);
        }
        if (Array.isArray(skillOrSkils)) {
            this.skills = this.skills.concat(skillOrSkils);
        }
    }
}
let user1 = new User();
user1.addSkill("one skill");
console.log("user1", user1);
let user2 = new User();
user2.addSkill(["one skill", "two skill"]);
console.log("user2", user2);
