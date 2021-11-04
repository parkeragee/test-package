/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    // A list of paths to modules that run some code to
    // configure or set up the testing framework before each test
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
        '<rootDir>/jest.integration.setup.js',
        '@testing-library/jest-dom/extend-expect',
    ],

    // An array of regexp pattern strings that are matched against all source file paths,
    // matched files will skip transformation
    transformIgnorePatterns: ['/node_modules/(?!emma-glasses)'],

    testEnvironment: 'jsdom',
};
