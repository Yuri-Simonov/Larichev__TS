class User {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}

const user = new User("Vasya");
console.log("user", user);

class Admin {
	role: number;
}

const admin = new Admin();
admin.role = 1;
console.log("admin", admin);
