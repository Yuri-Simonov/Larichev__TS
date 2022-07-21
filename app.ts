class User {
	static userName = "Yuri";

	changeName() {
		User.userName = "Not Yuri";
	}
}

console.log(User.userName); // Yuri
console.log(new User().changeName()); // undefined
