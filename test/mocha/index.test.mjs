/* eslint-env node, mocha */
import {strictEqual} from "assert";
import fetch from "node-fetch";

it("Server responds", async function () {
	const res = await fetch("http://src.local:3000/");
	const body = await res.text();
	strictEqual(res.status, 200);
	strictEqual(body.includes("Hello World"), true);
});
