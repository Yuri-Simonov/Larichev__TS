class SomeUser {
	_login: string;
	password: string;
	createdAt: Date;

	get login() {
		return this._login;
	}
	set login(l: string) {
		this._login = l + "new login";
	}

	async createPassword() {
		//password
	}
}

let user = new SomeUser();
user.login = "create ";
console.log("user", user);
