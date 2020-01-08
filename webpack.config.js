const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'xapi-statement-builder.js',
        library: 'xApiStatementBuilder',
        libraryTarget: "umd"
    },
};