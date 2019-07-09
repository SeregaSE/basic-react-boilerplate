const plugins = [
    require('autoprefixer'),
    require('postcss-modules-values')
];

console.log('POSTCSS SEREGA!', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    plugins.push(require('cssnano')({ preset: 'default' }))
}

module.exports = {
    plugins
};
