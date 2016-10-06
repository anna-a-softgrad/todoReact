module.exports = {
  entry: "./home",

  output: {
    filename: "build.js",
    library: "home"
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: "source-map",

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 
        'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
      
    }]
  }
}
