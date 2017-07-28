const webpack = require('webpack'),
    path = require('path'),
    devDir = path.resolve(__dirname, './app/js/dev'),
    distDir = path.resolve(__dirname, './app/js/dist'),
    paths = {
        context: devDir,
        output: distDir
    }

module.exports = {
    context: paths.context,
    entry: devDir + '/app.jsx',
    // externals: {
    //     jquery: 'jQuery'
    // },
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
        modules: ['node_modules'],
        alias: {
            // applicationStyles: 'app/css/style.css',
            // actions: 'app/js/dev/actions/actions.jsx',
            // reducers: 'app/js/dev/reducers/reducers.jsx',
            // configureStore: 'app/js/dev/store/configureStore.jsx'
        }
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
    devtool: 'cheap-module-eval-source-map',
    watch: true
};
