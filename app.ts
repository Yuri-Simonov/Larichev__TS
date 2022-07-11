type httpMethod = "post" | "get";

function literalType(url: string, method: httpMethod) {
	console.log(url, method);
}
literalType("http://...", "post");

let method = "post";

literalType("someUrl", method as "post");
