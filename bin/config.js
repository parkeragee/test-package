#! /usr/bin/env node
const shell = require("shelljs");

const type = process.argv[2];

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

let filesToCopy = [];

if (type === 'backend') {
    shell.echo('Configuring backend');
    filesToCopy = filesToCopy.concat(backendConfigs);
} else if (type === 'frontend') {
    shell.echo('Configuring frontend');
    filesToCopy = filesToCopy.concat(frontendConfigs);
} else {
    filesToCopy = filesToCopy.concat(frontendConfigs).concat(backendConfigs);
}

for (const file of filesToCopy) {
    shell.echo(`Setting up your ${file} file..`);
    shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
}
