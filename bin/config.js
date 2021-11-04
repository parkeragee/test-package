#! /usr/bin/env node
const shell = require("shelljs");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const frontendConfigs = [
    '.stylelintrc',
    'prettierignore',
    'prettier.config.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.js',
    '.eslintrc',
];

const backendConfigs = [
    '.flake8',
];

const filesToCopy = [];

if (argv[0] === 'backend') {
    filesToCopy = filesToCopy.concat(backendConfigs);
} else if (argv[0] === 'frontend') {
    filesToCopy = filesToCopy.concat(frontendConfigs);
} else {
    filesToCopy = filesToCopy.concat(frontendConfigs).concat(backendConfigs);
}

for (const file of filesToCopy) {
    shell.echo(`Setting up your ${file} file..`);
    shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
}
