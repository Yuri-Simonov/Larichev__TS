class UserBuilder {
	name: string;

	setName(name: string): this {
		this.name = name;
		return this;
	}

	isAdmin(): this is AdminBuilder {
		return this instanceof AdminBuilder;
	}
}

class AdminBuilder extends UserBuilder {
	roles: string;
}

const user1 = new UserBuilder().setName("Yo");
const user2 = new AdminBuilder().setName("Ju");

const user: UserBuilder | AdminBuilder = new UserBuilder().setName("Leo");

if (user.isAdmin()) {
	console.log(user.name + " admin");
} else {
	console.log(user.name + " user");
}
