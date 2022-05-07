// import html webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import manifest webpack
const WebpackPwaManifest = require('webpack-pwa-manifest');

// import path module
const path = require('path');

// import service worker
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    // TODO: Add and configure workbox plugins for a service worker and manifest file.

    plugins: [
      // html webpack
      new HtmlWebpackPlugin({ template: './index.html', title: 'J.A.T.E', minify: false }),
      // attach service worker
      new InjectManifest({ swSrc: './src-sw.js', swDest: 'src-sw.js', }),
      // creates a manifest.json
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Taking notes for your code made easy with color-coded syntax!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          // specify image path location, sizes available, and destination
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ]
      })
    ],

    // TODO: Add CSS loaders and babel to webpack.
    
    // css loader
    module: {
      rules: [
        { test: /\.css$/i, use: ['style-loader', 'css-loader'], },
        // babel loader
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            }
          }
        }
      ],
    },
    optimization: {
      minimize: false
    },
  };
};
