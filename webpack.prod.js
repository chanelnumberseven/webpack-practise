const { merge } = require('webpack-merge');
const config = require('./webpack.common');

module.exports = function(env){
    return merge(config, {
        mode: 'production',
        performance: {
            hints: false
        }
    })
}