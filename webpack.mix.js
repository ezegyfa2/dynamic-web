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
// mix.sass('resources/sass/welcome.scss', 'public/css/')
// mix.copy(
//     path.join('node_modules', 'dynamic-web-vue-components', 'src', 'Welcome', 'CompiledTemplate.json'), 
//     path.join('app', 'Templates', 'Welcome.json')
//     )
//compileAssets(mix, 'dynamic-web-vue-components', [ 'Welcome' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'RequestOffer' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'ThankYou' ])
//replaceComponentRegistrations('./node_modules/helper-vue-components/src')*/

// Header
// const imageCreator = new ProportionalCutterResponsiveImageCreator()
// const imageSizes = [
//     { width: 320, height: 600 }, // 320px
//     { width: 375, height: 600 }, // 375px
//     { width: 425, height: 600 }, // 425px
//     { width: 768, height: 680 }, // 768px
//     { width: 1024, height: 832 }, // 1024px
//     { width: 1440, height: 960 }, // 1440px
//     { width: 2550, height: 1700 }, // 2550px
// ]

// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/Header/Header/images/background.jpg', 
//     imageSizes,
//     'node_modules/dynamic-web-vue-components/src/Welcome/Header/Header/'
// )

// Articles
// const imageCreator = new ProportionalCutterResponsiveImageCreator()
// const imageSizes = [
//     272, // 320px
//     327, // 375px
//     377, // 425px
//     720, // 768px
//     609, // 1024px
//     772, // 1440px
//     814, // 2550px
// ]

// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/Articles/Description/images/easyToModify.jpg', 
//     imageSizes,
//     'public/images/articles/easyToModify'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/Articles/Description/images/hostingMaintenance.jpg', 
//     imageSizes,
//     'public/images/articles/hostingMaintenance'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/Articles/Description/images/modernAestheticDesign.jpg', 
//     imageSizes,
//     'public/images/articles/modernAestheticDesign'
// )

// const imageCreator = new ProportionalCutterResponsiveImageCreator()
// const imageSizes = [
//     292, // 320px
//     347, // 375px
//     397, // 425px
//     380, // 768px
//     260, // 1024px
//     355, // 1440px
//     355, // 2550px
// ]

// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/dentist.jpg', 
//     imageSizes,
//     'public/images/latestWorks/dentist'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/ediWheel.jpg', 
//     imageSizes,
//     'public/images/latestWorks/ediWheel'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/electrician.jpg', 
//     imageSizes,
//     'public/images/latestWorks/electrician'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/fruits.jpg', 
//     imageSizes,
//     'public/images/latestWorks/fruits'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/learningLanguages.jpg', 
//     imageSizes,
//     'public/images/latestWorks/learningLanguages'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/travel.jpg', 
//     imageSizes,
//     'public/images/latestWorks/travel'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/webshop.jpg', 
//     imageSizes,
//     'public/images/latestWorks/webshop'
// )
// imageCreator.createResponsiveVersions(
//     'node_modules/dynamic-web-vue-components/src/Welcome/LatestWorks/images/wildNature.jpg', 
//     imageSizes,
//     'public/images/latestWorks/wildNature'
// )

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
replaceImageCache('app/Http/ImageCache.php')
