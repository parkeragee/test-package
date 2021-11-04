#! /usr/bin/env node
const shell = require("shelljs");
const path = require("path");
const prettierConfig = require('./prettier-config');

shell.echo("Setting up your Prettier config files now..");
shell.exec(`echo \'${JSON.stringify(prettierConfig, null, 2)}\' > .prettier.config.js`);
