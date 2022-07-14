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

function isString(x: string | number): x is string {
	return typeof x === "string";
}

function logId(id: string | number) {
	if (isString(id)) {
		console.log(id);
	} else {
		console.log(id);
	}
}

function isAdmin(user: User | Admin): user is Admin {
	return "role" in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
	return (user as Admin).role !== undefined;
}
