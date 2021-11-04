#! /usr/bin/env node
const shell = require("shelljs");

const argv = process.argv;

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
shell.echo(argv);
if (argv[0] === 'backend') {
    shell.echo('Configuring backend');
    filesToCopy = filesToCopy.concat(backendConfigs);
} else if (argv[0] === 'frontend') {
    shell.echo('Configuring frontend');
    filesToCopy = filesToCopy.concat(frontendConfigs);
} else {
    filesToCopy = filesToCopy.concat(frontendConfigs).concat(backendConfigs);
}

for (const file of filesToCopy) {
    shell.echo(`Setting up your ${file} file..`);
    shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
}
