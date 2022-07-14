let a = 5;
let b: string = a.toString();
console.log("b", b);

let c = "67";
let d: number = parseInt(c);
console.log("d", d);

interface User {
	name: string;
	password: string;
}

const user: User = {
	name: "Vasya",
	password: "12345",
};

interface Admin {
	name: string;
	role: string;
}

function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: "junior",
	};
}

const admin: Admin = userToAdmin(user);
console.log("admin", admin);
