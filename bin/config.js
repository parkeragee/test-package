#! /usr/bin/env node
const shell = require("shelljs");
const inquirer = require('inquirer');

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

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?',
      default: 'Alligators'
    },
    {
      name: 'faveColor',
      message: 'What is your favorite color?',
      default: '#008f68'
    },
  ])
  .then(answers => {
    console.info('Answers:', answers);
  });

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
