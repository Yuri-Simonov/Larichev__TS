interface UserName {
	name: string;
}

interface UserAge {
	age: number;
}

interface User extends UserName, UserAge {
	userCreatedAt: Date;
}

let user: User = {
	name: "Yuri",
	age: 26,
	userCreatedAt: new Date(),
};
