const webpack = require('webpack'),
    path = require('path'),
    devDir = path.resolve(__dirname, './app/js/dev'),
    distDir = path.resolve(__dirname, './app/js/dist'),
    paths = {
        context: devDir,
        output: distDir
    },
    isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
    context: paths.context,
    entry: devDir + '/app.jsx',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    output: {
        path: paths.output,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    devtool: isDevelopment ? 'cheap-module-eval-source-map' : false,
    watch: isDevelopment
};
