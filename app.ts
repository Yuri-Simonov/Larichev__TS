const user = {
	name: "Yuri",
	surname: "Simonov",
	age: "26",
};

function getFullName(userEntities: { name: string; surname: string }) {
	console.log("user", userEntities.name, userEntities.surname);
}
getFullName(user);
