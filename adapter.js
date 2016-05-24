(function (karma, coolie) {
  'use strict';

  for (var foundCoolieFile in karma.files) {
    if (/\/coolie\.js$/.test(foundCoolieFile)) {
      break;
    }
  }

  var nodeModulesDir = foundCoolieFile.match(/^.*?\/node_modules\//)[0];
  var mainModulesDir = coolie.resolvePath(nodeModulesDir, '../');

  // coolie config
  coolie.config({
    base: mainModulesDir,
    baseDir: mainModulesDir,
    mainModulesDir: mainModulesDir,
    nodeModulesDir: nodeModulesDir
  });

  // make it async
  karma.loaded = function () {
    // ignore
  };
})(window.__karma__, window.coolie);
