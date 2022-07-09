function literalType(url: string, method: "post" | "get") {
	console.log(url, method);
}
literalType("http://...", "post");

let method = "post";

literalType("someUrl", method as "post");
