/* eslint-env node */
"use strict";
const {join} = require("path");
const {writeFileSync, mkdirSync} = require("fs");
const {dependencies} = require("../package.json");

const version = dependencies["browser-sync"];
const code = [
	`FROM node:16-alpine`,
	`RUN npm install -g browser-sync@${version}`,
	`EXPOSE 3000 3001`,
	`CMD ["browser-sync", "start", "--server", "--files", ".", "--no-open", "--no-notify"]`
];

const folder = join(process.cwd(), "docker")
try{
	mkdirSync(folder);
	console.log("Created", folder);
} catch(e) {}

const filepath = join(folder, "Dockerfile")
writeFileSync(filepath, code.join("\n"), "utf8");
console.log("Created", filepath);
