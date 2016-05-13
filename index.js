var cooliejsPath, createPattern,
  path = require('path');

createPattern = function (path) {
  return {
    pattern: path,
    included: true,
    served: true,
    watched: false
  };
};

cooliejsPath = path.resolve('coolie.js');

var initRequireJs = function (files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(cooliejsPath));
};

initRequireJs.$inject = ['config.files'];

module.exports = {
  'framework:coolie': ['factory', initRequireJs]
};
