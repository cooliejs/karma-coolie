(function(karma, requirejs, locationPathname) {

// monkey patch coolie.js


// make it async
karma.loaded = function() {};

})(window.__karma__, window.coolie, window.location.pathname);
