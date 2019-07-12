const plugins = [
    require('autoprefixer'),
    require('postcss-modules-values')
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(require('cssnano')({ preset: 'default' }))
}

module.exports = {
    plugins
};
