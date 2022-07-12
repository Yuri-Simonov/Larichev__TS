interface UserName {
	name?: string;
}

interface UserAge {
	age?: number;
}

interface User extends UserName, UserAge {
	userCreatedAt?: Date;
}

let user: User = {
	name: "Yuri",
	age: 26,
	userCreatedAt: new Date(),
};

function multuply(first: number, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}

interface UserPro {
	name: string;
	password?: {
		type: string;
	};
}

function testFunc(user: UserPro) {
	const t = user.password?.type;
}

function testFunc2(param?: number) {
	const t = param ?? multuply(5);
}
