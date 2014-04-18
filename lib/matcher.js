if (typeof exports === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    factory(require, exports);
  };
}
define(function (require, exports) {
  "use strict";
  var keys = Object.keys;
  var create = exports.create = function (map) {
      var pattern = "", parts = keys(map);
      parts.forEach(function (key) {
        return pattern += map[key].source;
      }.bind(this));
      parts.unshift("full");
      return function (str) {
        var match = str.match(pattern);
        match && parts.forEach(function (key, idx) {
          return match[key] = match[idx];
        }.bind(this));
        return match;
      }.bind(this);
    };
});