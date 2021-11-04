#! /usr/bin/env node
const shell = require("shelljs");

const filesToCopy = [
    '.stylelintrc',
    'prettierignore',
    'prettier.config.js'
];

for (const file of filesToCopy) {
    shell.echo(`Setting up your ${file} file..`);
    shell.cp('-R', `${__dirname}/${file}`, `./${file}`);
}
