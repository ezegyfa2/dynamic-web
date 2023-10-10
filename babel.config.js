module.exports = function (api) {
    const plugins = [
        ["syntax-dynamic-import", { loose: true }],
    ];
  
    /** this is just for minimal working purposes,
       * for testing larger applications it is
       * advisable to cache the transpiled modules in
       * node_modules/.bin/.cache/@babel/register* */
    api.cache(false);
  
    return {
        plugins
    };
};