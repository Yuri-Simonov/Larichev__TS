type voidFunc = () => void;

const f: voidFunc = () => {
	return true;
};

const skills = ["dev", "devOps"];

const user = {
	s: ["s"],
};

skills.forEach((skill) => user.s.push(skill));

console.log("user", user);
