#! /usr/bin/env node
const shell = require("shelljs");
const path = require("path");

// process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'));
// shell.exec("prettier 'src/**/*.{js,json}' --write");

shell.echo("Hey now");
