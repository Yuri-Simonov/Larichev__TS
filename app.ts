class User {
	name: string;
	age: number;

	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(name: string, age: number);
	constructor(ageOrName?: string | number, age?: number) {
		if (typeof ageOrName === "string") {
			this.name = ageOrName;
		} else if (typeof ageOrName === "number") {
			this.age = ageOrName;
		}
		if (typeof age === "number") {
			this.age = age;
		}
	}
}

let user = new User();
let user2 = new User("Henrik");
let user3 = new User(23);
let user4 = new User("Petr", 22);
console.log("user4", user4);
