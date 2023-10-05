const mix = require('laravel-mix')
require('laravel-mix-compress')
require('helper-vue-components/AssetCompiler.js').default

//compileAssets(mix, 'dynamic-web-vue-components', [ 'Welcome' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'RequestOffer' ])
compileAssets(mix, 'dynamic-web-vue-components', [ 'ThankYou' ])
mix.compress()