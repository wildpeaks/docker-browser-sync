/* eslint-env node, mocha */
/* eslint-disable prefer-arrow-callback */
"use strict";
const {strictEqual} = require("assert");
const fetch = require("node-fetch");

it("Server responds", async function () {
	const res = await fetch("http://src.local:3000/");
	const body = await res.text();
	strictEqual(res.status, 200);
	strictEqual(body.includes("Hello World"), true);
});
