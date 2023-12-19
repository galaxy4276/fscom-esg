const path = require('node:path');

/**
 * * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'js', 'module.js'),
    output: {
        path: path.join(__dirname, 'js', 'out'),
        filename: 'index.out.js',
    },
};
