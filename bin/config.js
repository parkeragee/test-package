#! /usr/bin/env node
const path = require('path');
const shell = require("shelljs");
const prettierConfig = require('./prettier.config');
const stylelintConfig = require('./stylelint');
// const prettierIgnoreConfig = require('./prettierignore');

const filePath = process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', 'test-package'));

// shell.echo("Setting up your Prettier config files now..");
// shell.exec(`echo \'${JSON.stringify(stylelintConfig, null, 2)}\' > .stylelintrc`);

shell.echo("Setting up your StyleLint config file..");
shell.exec(`echo \'${JSON.stringify(stylelintConfig, null, 2)}\' > .stylelintrc`);

shell.echo("Setting up your .prettierignore config file..");
shell.cp('-R', `${__dirname}/prettierignore`, './prettierignore');
