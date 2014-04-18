if (typeof exports === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    factory(require, exports);
  };
}
define(function (require, exports) {
  "use strict";
  var shell = require("shelljs"), glob = require("glob");
  var createMatcher = require("./matcher").create;
  glob("test/*", {}, function (err, files) {
    console.log(files);
  }.bind(this));
});