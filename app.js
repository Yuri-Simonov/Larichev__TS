"use strict";
function literalType(url, method) {
    console.log(url, method);
}
literalType("http://...", "post");
let method = "post";
literalType("someUrl", method);
