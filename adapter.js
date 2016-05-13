(function (karma, coolie) {

  // set coolie base path
  coolie.config({
    base: coolie.resolvePath(coolie.dirname, '../../')
  });

  coolie.callback(karma.start);

  // make it async
  karma.loaded = function () {
  };

})(window.__karma__, window.coolie);
