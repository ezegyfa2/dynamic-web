const mix = require('laravel-mix');
require('helper-vue-components/AssetCompiler.js').default

//compileAssets(mix, 'dynamic-web-vue-components', [ 'Welcome' ])
//compileAssets(mix, 'dynamic-web-vue-components', [ 'RequestOffer' ])
compileAssets(mix, 'dynamic-web-vue-components', [ 'ThankYou' ])
