const mix = require('laravel-mix');
const path = require('path')

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "@components": path.resolve(
                __dirname,
                "resources/assets/js/components"
            )
        }
    }
});
mix.js('resources/js/BasicPackages.js', 'public/js').vue()
mix.js('resources/js/layout.js', 'public/js').vue()
mix.js('resources/js/welcome.js', 'public/js').vue()
mix.js('resources/js/requestOffer.js', 'public/js').vue()
mix.js('resources/js/thankYou.js', 'public/js').vue()
