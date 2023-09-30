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
            "@nodeModules": path.resolve(
                __dirname,
                "node_modules"
            )
        }
    }
});
mix.js('resources/js/basicPackages.js', 'public/js').vue()
mix.js('resources/js/welcome.js', 'public/js').vue()
mix.js('resources/js/requestOffer.js', 'public/js').vue()
mix.js('resources/js/thankYou.js', 'public/js').vue()
mix.copy('node_modules/dynamic-web-vue-components/src/Welcome/CompiledTemplate.json', 'app/Templates/welcome.json')
mix.copy('node_modules/dynamic-web-vue-components/src/RequestOffer/CompiledTemplate.json', 'app/Templates/requestOffer.json')
mix.copy('node_modules/dynamic-web-vue-components/src/ThankYou/CompiledTemplate.json', 'app/Templates/thankYou.json')
let nodeModulesFolderPath = path.resolve(
    __dirname,
    "node_modules"
)
mix.copy(nodeModulesFolderPath + '/bootstrap/dist/css/bootstrap.min.css', 'public/css')
