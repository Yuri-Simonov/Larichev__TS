const str1 = "1";
const str2 = "2";

function funcTs(a: string, b: string): string {
	return a + b;
}

const funcTsArrow = (a: string, b: string): string => {
	return a + b;
};

console.log(funcTs(str1, str2));
console.log(funcTsArrow(str1, str2));
