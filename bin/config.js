#! /usr/bin/env node
const shell = require("shelljs");
const inquirer = require('inquirer');
const chalk = require('chalk');

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


const runConfig = type => {
    let filesToCopy = [];
    if (type === 'backend') {
        filesToCopy = filesToCopy.concat(backendConfigs);
    } else if (type === 'frontend') {
        filesToCopy = filesToCopy.concat(frontendConfigs);
    } else {
        filesToCopy = filesToCopy.concat(frontendConfigs).concat(backendConfigs);
    }
    for (const file of filesToCopy) {
        shell.echo(chalk.yellow(`Setting up your ${file} file..`));
        shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
    }
}

const go = async () => await inquirer.prompt([
    {
        type: 'list',
        name: 'configType',
        message: 'Do you want to setup config files for your frontend, backend, or both?',
        choices: ['both', 'frontend', 'backend']
    },
    {
        type: 'list',
        name: 'overwrite',
        message: 'Do you want to overwrite your current config files?',
        choices: ['yes', 'no']
    },
]).then(answers => {
    runConfig(answers.configType);
    shell.echo(chalk.greenBright('✅ Done configuring your project'));
});

go();
