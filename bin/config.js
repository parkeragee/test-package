#! /usr/bin/env node
const path = require('path');
const shell = require("shelljs");
const prettierConfig = require('./prettier.config');
const stylelintConfig = require('./stylelint');
// const prettierIgnoreConfig = require('./prettierignore');

process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'));

console.log(process.env.PATH);

// shell.echo("Setting up your Prettier config files now..");
// shell.exec(`echo \'${JSON.stringify(stylelintConfig, null, 2)}\' > .stylelintrc`);

shell.echo("Setting up your StyleLint config file..");
shell.exec(`echo \'${JSON.stringify(stylelintConfig, null, 2)}\' > .stylelintrc`);

// shell.echo("Setting up your .prettierignore config file..");
// shell.exec(`echo \'${prettierIgnoreConfig}\' > .prettierignore`);
