(function (karma, coolie) {

  // set coolie base path
  coolie.config({
    base: coolie.resolvePath(coolie.dirname, '../../')
  });


  coolie.callback(function () {
    karma.start.call();
  });

  // make it async
  karma.loaded = function () {
  };


})(window.__karma__, window.coolie);