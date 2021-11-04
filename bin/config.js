#! /usr/bin/env node
const shell = require("shelljs");
const inquirer = require('inquirer');
const chalk = require('chalk');

const styleFiles = ['.stylelintrc'];
const backendFiles = ['.flake8'];
const frontendFiles = [
    'prettierignore',
    'prettier.config.js',
    'babel.config.js',
    'jest.config.js',
    'jest.setup.js',
    '.eslintrc',
];

const optionMap = {
    styles: styleFiles,
    javascript: frontendFiles,
    python: backendFiles,
};

const runConfig = answers => {
    const configTypes = answers.configTypes;
    configTypes.map(type => {
        for (const file of optionMap[type]) {
            shell.echo(chalk.yellow(`Setting up your ${file} file..`));
            shell.cp('-Rf', `${__dirname}/config-files/${file}`, `./${file}`);
        }
    });
}

const go = async () => await inquirer.prompt([
    {
        type: 'checkbox',
        name: 'configTypes',
        message: 'Select the files you want to configure',
        choices: [
            'styles',
            'javascript',
            'python',
            'local config files (local.json, local_settings.py, etc.)'
        ],
    },
]).then(answers => {
    runConfig(answers);
    shell.echo(chalk.greenBright('✅ Done configuring your project'));
});

go();
