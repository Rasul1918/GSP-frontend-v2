(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.homepage = mod.exports;
    }
})(undefined, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var ableSearch = function ableSearch() {
        $('.search-icon').click(function () {
            $('.my-navbar').addClass('justify-content-center');
            $('.my-navbar').addClass('search-active');
        });
    };

    var disableSearch = function disableSearch() {
        $('.times-icon').click(function () {
            $('.my-navbar').removeClass('justify-content-center');
            $('.my-navbar').removeClass('search-active');
        });

        $(document).click(function (e) {
            var _this = $(e.target);

            if (!_this.closest('.search').length && !_this.hasClass('search')) {
                $('.my-navbar').removeClass('justify-content-center');
                $('.my-navbar').removeClass('search-active');
            }
        });
    };

    var toggleNav = function toggleNav(e) {
        $('.hamburger').click(function () {
            $('.my-navbar').toggleClass('BG-black');
            $('.logo').toggleClass('d-none');
            $('.nv-collapse').toggleClass('toggle-nav');
        });

        $('.hamburger').click(function () {
            $(this).toggleClass('hamburger-active');
        });
    };

    exports.ableSearch = ableSearch;
    exports.disableSearch = disableSearch;
    exports.toggleNav = toggleNav;
});

},{}],2:[function(require,module,exports){
"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./homepage'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./homepage'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.homepage);
    global.main = mod.exports;
  }
})(undefined, function (_homepage) {
  'use strict';

  $(document).ready(function () {

    (0, _homepage.ableSearch)();
    (0, _homepage.disableSearch)();
    (0, _homepage.toggleNav)();
  });
});

},{"./homepage":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUNyQixVQUFBLGNBQUEsRUFBQSxLQUFBLENBQXdCLFlBQVU7QUFDOUIsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLHdCQUFBO0FBQ0EsY0FBQSxZQUFBLEVBQUEsUUFBQSxDQUFBLGVBQUE7QUFGSixTQUFBO0FBREosS0FBQTs7QUFPQSxRQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFNO0FBQ3hCLFVBQUEsYUFBQSxFQUFBLEtBQUEsQ0FBdUIsWUFBVTtBQUM3QixjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsd0JBQUE7QUFDQSxjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUZKLFNBQUE7O0FBS0EsVUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixVQUFBLENBQUEsRUFBWTtBQUMxQixnQkFBTSxRQUFRLEVBQUUsRUFBaEIsTUFBYyxDQUFkOztBQUVBLGdCQUFHLENBQUMsTUFBQSxPQUFBLENBQUEsU0FBQSxFQUFELE1BQUEsSUFBb0MsQ0FBQyxNQUFBLFFBQUEsQ0FBeEMsUUFBd0MsQ0FBeEMsRUFBa0U7QUFDOUQsa0JBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSx3QkFBQTtBQUNBLGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsZUFBQTtBQUNIO0FBTkwsU0FBQTtBQU5KLEtBQUE7O0FBZ0JBLFFBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQSxDQUFBLEVBQUs7QUFDbkIsVUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFVO0FBQzVCLGNBQUEsWUFBQSxFQUFBLFdBQUEsQ0FBQSxVQUFBO0FBQ0EsY0FBQSxPQUFBLEVBQUEsV0FBQSxDQUFBLFFBQUE7QUFDQSxjQUFBLGNBQUEsRUFBQSxXQUFBLENBQUEsWUFBQTtBQUhKLFNBQUE7O0FBTUEsVUFBQSxZQUFBLEVBQUEsS0FBQSxDQUFzQixZQUFVO0FBQzVCLGNBQUEsSUFBQSxFQUFBLFdBQUEsQ0FBQSxrQkFBQTtBQURKLFNBQUE7QUFQSixLQUFBOztZQVlBLFUsR0FBQSxVO1lBQUEsYSxHQUFBLGE7WUFBQSxTLEdBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLElBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsWUFBVTs7QUFFM0IsS0FBQSxHQUFBLFVBQUEsVUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLGFBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxTQUFBO0FBSkQsR0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhYmxlU2VhcmNoID0gKCkgPT4ge1xuICAgICQoJy5zZWFyY2gtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAkKCcubXktbmF2YmFyJykuYWRkQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTsgXG4gICAgfSlcbn1cblxuY29uc3QgZGlzYWJsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAkKCcudGltZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcbiAgICB9KSAgXG5cbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gJChlLnRhcmdldCk7XG5cbiAgICAgICAgaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2gnKS5sZW5ndGggJiYgIV90aGlzLmhhc0NsYXNzKCdzZWFyY2gnKSkge1xuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XG4gICAgICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCB0b2dnbGVOYXYgPSBlID0+IHtcbiAgICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnRvZ2dsZUNsYXNzKCdCRy1ibGFjaycpOyBcbiAgICAgICAgJCgnLmxvZ28nKS50b2dnbGVDbGFzcygnZC1ub25lJyk7IFxuICAgICAgICAkKCcubnYtY29sbGFwc2UnKS50b2dnbGVDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgIH0pO1xuICAgIFxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoYW1idXJnZXItYWN0aXZlJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXZ9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXZ9IGZyb20gJy4vaG9tZXBhZ2UnXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gYWJsZVNlYXJjaCgpO1xuIGRpc2FibGVTZWFyY2goKVxuIHRvZ2dsZU5hdigpO1xuIFxuXG59KTsiXX0=
