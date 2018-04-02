'use strict'

var Dep = require('dep');

module.exports = function(options, callback) {
  var dep = new Dep(options);
  dep.on('ready', dep.start);
  dep.on('done', callback);
}
