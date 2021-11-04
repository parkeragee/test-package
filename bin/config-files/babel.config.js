module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: { browsers: ['last 2 versions'] },
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
    ],
};
