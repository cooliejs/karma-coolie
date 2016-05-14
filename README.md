karma-coolie
================
### Install
```shell
npm install --save-dev karma karma-jasmine jasmine-core karma-coolie karma-chrome-launcher
```

### Dir tree
```
src
├─circle.js
└─square.js
test
├─circle.spec.js
├─square.spec.js
└─test-main.js
```

### Karma settings
* Add `coolie` framework to `karma.config.js`
* Add `src` files to `files` but not included
* Add `test` files to `files` but not included
* Add `test/test-main.js` to `files`

```
{
  frameworks: ['jasmine', 'coolie'],
  files: [
		{pattern: 'src/*.js', included: false},
		{pattern: 'test/*.spec.js', included: false},
		'test/test-main.js'
	]
}
```

### Test files
Follow the official [demo](http://frontenddev.org/article/follow-me-coolie-six-modules-of-unit-tests.html), write your src code `/src/circle.js` and `/src/square.js`. But the `spec` test files get some different.

The `/test/circle.spec.js`:
```js
define(function (require) {
  var circle = require('../src/circle.js');
  describe('circle.js', function () {

      // 圆面积
      it('.getArea', function () {
          // 半径为 1 的圆
          expect(circle.getArea(1)).toEqual(Math.PI);
      });

      // 圆周长
      it('.getCircumference', function () {
          // 半径为 1 的圆
          expect(circle.getCircumference(1)).toEqual(2 * Math.PI);
      });
  });
});
```
And `/test/square.spec.js`:
```js
define(function (require) {
  var square = require('../src/square.js')
  describe('square.js', function () {

      // 方形面积
      it('.getArea', function () {
          // 边长为 1 的正方形
          expect(square.getArea(1, 1)).toEqual(1);
      });

      //// 方形周长
      //it('.getCircumference', function () {
      //    // 边长为 1 的正方形
      //    expect(square.getCircumference(1, 1)).toEqual(4);
      //});
  });

});
```

Finally the `/test/test-main.js` looks like:
```js
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

  coolie.use(tests);

})(window.__karma__, coolie);
```

### Test
Now start to run test:
```shell
karma start
```

### Demo
You can see [demo here](https://github.com/cooliejs/karma-coolie/tree/demo)