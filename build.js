'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

let compiler = webpack(config);
return new Promise((resolve, reject) => {
  compiler.run((err, stats) => {})
});