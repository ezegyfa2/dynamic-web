const mix = require('laravel-mix')
const path = require('path')
const { size } = require('lodash')
require('laravel-mix-compress')
require('helper-vue-components/AssetCompiler.js')
const headerBackgroundImageGenerator = require('dynamic-web-vue-components/Welcome/Header/Header/images/generator.js')
const articleImageGenerator = require('dynamic-web-vue-components/Welcome/Articles/Description/images/generator.js')
const latestWorkImageGenerator = require('dynamic-web-vue-components/Welcome/LatestWorks/images/generator.js')

global.currentWebpackConfig = {
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
    output: {
        chunkFilename: 'js/[name].bundle.js',
        publicPath: '/',
    }
}

mix.webpackConfig(currentWebpackConfig)
//mix.js('resources/js/basicPackages.js', 'public/js').vue()
//mix.js('resources/js/welcome.js', 'public/js').vue()
//mix.js('resources/js/thankYou.js', 'public/js').vue()
//mix.sass('resources/sass/welcome.scss', 'public/css/')
/*mix.copy(
    path.join('node_modules', 'dynamic-web-vue-components', 'src', 'Welcome', 'CompiledTemplate.json'), 
    path.join('app', 'Templates', 'Welcome.json')
)*/
//compileAssets(mix, 'dynamic-web-vue-components', [ 'Welcome' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'RequestOffer' ])
compileAssets(mix, 'dynamic-web-vue-components', [ 'ThankYou' ])
//replaceComponentRegistrations('./node_modules/helper-vue-components/src')

//headerBackgroundImageGenerator.generate()
//articleImageGenerator.generate()
//latestWorkImageGenerator.generate()
//replaceImageCache('app/Http/ImageCache.php')
