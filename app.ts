let input: unknown;

input = 55;

function toNum(num: unknown): number | void {
	if (typeof num === "number") {
		console.log(1);

		return ++num;
	} else {
		num;
	}
}

let a = toNum(input);
console.log("a", a);

async function getData() {
	try {
		await fetch("");
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
}

type res1 = unknown | string;
type res2 = unknown & string;
