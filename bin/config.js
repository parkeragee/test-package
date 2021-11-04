#! /usr/bin/env node
const shell = require("shelljs");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const filesToCopy = [
    '.stylelintrc',
    'prettierignore',
    'prettier.config.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.js',
    '.eslintrc',
    '.flake8',
];
console.log(argv);
if (argv.python) {
    console.log('Python only');
}

for (const file of filesToCopy) {
    shell.echo(`Setting up your ${file} file..`);
    shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
}
