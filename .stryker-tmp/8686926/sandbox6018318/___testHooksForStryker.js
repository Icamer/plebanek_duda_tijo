
    (function (window) {
      
      var mocha = window.mocha || require('mocha');
      if (window.____mochaAddTest) {
        mocha.Suite.prototype.addTest = window.____mochaAddTest;
      } else {
        window.____mochaAddTest = mocha.Suite.prototype.addTest
      }
      var current = 0;
      var realAddTest = mocha.Suite.prototype.addTest;
      mocha.Suite.prototype.addTest = function () {
        if ([0,1,3].indexOf(current) > -1) {
          realAddTest.apply(this, arguments);
        }
        current++;
      };
    
    })((Function('return this'))());