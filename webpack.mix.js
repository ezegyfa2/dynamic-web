const mix = require('laravel-mix')
const path = require('path')
const { size } = require('lodash')
require('laravel-mix-compress')
require('helper-vue-components/AssetCompiler.js')
const ProportionalCutterResponsiveImageCreator = require('js-helper-methods/imageMethods/ProportionalCutterResponsiveImageCreator.js')
const sharp = require('sharp')

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
mix.js('resources/js/welcome.js', 'public/js').vue()
mix.sass('resources/sass/welcome.scss', 'public/css/')
replaceImageCache('app/Http/ImageCache.php')
mix.copy(
    path.join('node_modules', 'dynamic-web-vue-components', 'src', 'Welcome', 'CompiledTemplate.json'), 
    path.join('app', 'Templates', 'Welcome.json')
)
//compileAssets(mix, 'dynamic-web-vue-components', [ 'Welcome' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'RequestOffer' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'ThankYou' ])
//replaceComponentRegistrations('./node_modules/helper-vue-components/src')*/

/*const imageCreator = new ProportionalCutterResponsiveImageCreator()
const imageSizes = [
    227,
    282,
    332,
    323,
    203,
    255,
    255,
]
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/dentist.jpg', 
    imageSizes,
    'public/images/latestWorks/dentist'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/ediWheel.jpg', 
    imageSizes,
    'public/images/latestWorks/ediWheel'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/electrician.jpg', 
    imageSizes,
    'public/images/latestWorks/electrician'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/fruits.jpg', 
    imageSizes,
    'public/images/latestWorks/fruits'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/learningLanguages.jpg', 
    imageSizes,
    'public/images/latestWorks/learningLanguages'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/travel.jpg', 
    imageSizes,
    'public/images/latestWorks/travel'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/webshop.jpg', 
    imageSizes,
    'public/images/latestWorks/webshop'
)
imageCreator.createResponsiveVersions(
    'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/wildNature.jpg', 
    imageSizes,
    'public/images/latestWorks/wildNature'
)

/*imageCreator.createResponsiveVersions(
    'public/images/articles/blondeWoman/615.webp', 
    [
        {
            width: 200,
            left: 50,
            //position: 'centre'
        },
        {
            width: 300,
        },
        {
            width: 400,
        },
        {
            width: 500,
        },
    ],
    'public'
)*/
