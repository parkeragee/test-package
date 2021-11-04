#! /usr/bin/env node
const shell = require("shelljs");
const inquirer = require('inquirer');
const chalk = require('chalk');

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

const runConfig = fileList => {
    shell.echo(fileList.join(' '));
    let filesToCopy = [];
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
        choices: files,
    },
]).then(answers => {
    shell.echo(answers);
    runConfig(answers.fileList);
    shell.echo(chalk.greenBright('✅ Done configuring your project'));
});

go();
