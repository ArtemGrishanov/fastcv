module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ]
  }
  // resolve: {
  //   extensions: ['*', '.js', '.jsx']
  // }
}
