#! /usr/bin/env node
const shell = require("shelljs");
const inquirer = require('inquirer');
const chalk = require('chalk');

const options = [
    'styles',
    'javascript',
    'python',
    'settings'
];

const files = [
    '.stylelintrc',
    'prettierignore',
    'prettier.config.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.js',
    '.eslintrc',
    'flake8',
];

const runConfig = answers => {
    let filesToCopy = answers.fileList;
    for (const file of filesToCopy) {
        shell.echo(chalk.yellow(`Setting up your ${file} file..`));
        shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
    }
}

const go = async () => await inquirer.prompt([
    {
        type: 'checkbox',
        name: 'fileList',
        message: 'Select the files you want to configure',
        choices: options,
    },
]).then(answers => {
    runConfig(answers);
    shell.echo(chalk.greenBright('✅ Done configuring your project'));
});

go();
