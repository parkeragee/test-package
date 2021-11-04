#! /usr/bin/env node
const shell = require("shelljs");
const prettierConfig = require('./prettier.config');
const stylelintConfig = require('./stylelint');

shell.echo("Setting up your Prettier config files now..");
shell.cp('-R', prettierConfig, './');

shell.echo("Setting up your StyleLint config file..");
shell.exec(`echo \'${JSON.stringify(stylelintConfig, null, 2)}\' > .stylelintrc`);
