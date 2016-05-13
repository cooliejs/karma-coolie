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

cooliejsPath = path.resolve(__dirname, './node_modules/coolie.js/coolie.js');

var initCoolieJs = function (files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(cooliejsPath));
};

initCoolieJs.$inject = ['config.files'];

module.exports = {
  'framework:coolie': ['factory', initCoolieJs]
};
