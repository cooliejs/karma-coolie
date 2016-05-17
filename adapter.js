(function (karma, coolie) {

  // set coolie base path
  coolie.config({
    baseDir: coolie.resolvePath(coolie.dirname, '../../'),
    nodeModulesDir: coolie.resolvePath(coolie.dirname, '../../../')
  });

  // make it async
  karma.loaded = function () {
    // ignore
  };

})(window.__karma__, window.coolie);
