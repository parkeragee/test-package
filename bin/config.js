#! /usr/bin/env node
const shell = require("shelljs");

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

for (const file of filesToCopy) {
    shell.echo(`Setting up your ${file} file..`);
    shell.cp('-R', `${__dirname}/${file}`, `./${file}`);
}
