module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Audio: 'app/components/Audio.jsx',
      Content: 'app/components/Content.jsx',
      Main: 'app/components/Main.jsx',
      NavBar: 'app/components/NavBar.jsx',
      TextToolTip: 'app/components/TextToolTip.jsx',
      
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
