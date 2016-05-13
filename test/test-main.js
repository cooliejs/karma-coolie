(function(__karma__, coolie) {
  var tests = [],
    file;
  for (file in __karma__.files) {
    if (__karma__.files.hasOwnProperty(file)) {
      // just include .spec test files
      if (/\.spec\.js$/i.test(file)) {
        tests.push(file);
      }
    }
  }

  coolie.use(test);

})(window.__karma__, coolie);
