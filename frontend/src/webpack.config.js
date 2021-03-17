module.exports = {
    entry: './test/Script.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [{ 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        }]    
    }
}