'use strict'

var Dep = require('node-deployer');

module.exports = function(options, callback) {
  var dep = new Dep(options);
  dep.on('ready', dep.start);
  dep.on('done', callback);
}
