(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.accordion = mod.exports;
    }
})(undefined, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var accordionFunc = function accordionFunc() {

        $('.collapse').on('shown.bs.collapse', function () {
            $(this).parent().addClass('accordion__item--active');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).parent().removeClass('accordion__item--active');
        });

        // ORANGE TIMES ICON
        $('.accordion__item__header').on('click', function () {
            $('.accordion__item__header').not(this).removeClass('change-header-color');
            $(this).toggleClass('change-header-color');
        });
    };

    exports.default = accordionFunc;
    module.exports = exports['default'];
});

},{}],2:[function(require,module,exports){
"use strict";

(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["module", "exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.autoToggleClassNav = mod.exports;
	}
})(undefined, function (module, exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var autoToggleClassNav = function autoToggleClassNav() {
		var pageLink = window.location.href;
		console.log(pageLink);
		if (pageLink.indexOf("index.html") === -1) {
			$(".my-navbar").addClass("nav-second-type");
		}
	};

	exports.default = autoToggleClassNav;
	module.exports = exports["default"];
});

},{}],3:[function(require,module,exports){
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

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

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
            $('.logo').toggleClass('d-none');
            $('.nv-collapse').toggleClass('toggle-nav');
        });

        $('.hamburger').click(function () {
            $(this).toggleClass('hamburger-active');
        });
    };

    var toDown = function toDown() {
        $(".top-content__info-box__triangle").click(function () {
            var topPos = $("#services-header").offset().top;
            $("html,body").animate({ scrollTop: topPos - 50 }, 700);
        });
    };

    var slickSlider = function slickSlider() {
        var _$$slick;

        $(".my-slider-area").slick((_$$slick = {
            dots: true,
            slidesToShow: true
        }, _defineProperty(_$$slick, 'slidesToShow', 4), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'autoplay', true), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _defineProperty(_$$slick, 'responsive', [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                centerMode: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]), _$$slick));
    };

    exports.ableSearch = ableSearch;
    exports.disableSearch = disableSearch;
    exports.toggleNav = toggleNav;
    exports.toDown = toDown;
    exports.slickSlider = slickSlider;
});

},{}],4:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./homepage', './accordion', './autoToggleClassNav'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./homepage'), require('./accordion'), require('./autoToggleClassNav'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.homepage, global.accordion, global.autoToggleClassNav);
    global.main = mod.exports;
  }
})(undefined, function (_homepage, _accordion, _autoToggleClassNav) {
  'use strict';

  var _accordion2 = _interopRequireDefault(_accordion);

  var _autoToggleClassNav2 = _interopRequireDefault(_autoToggleClassNav);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {

    (0, _homepage.ableSearch)();
    (0, _homepage.disableSearch)();
    (0, _homepage.toggleNav)();
    (0, _homepage.toDown)();
    (0, _homepage.slickSlider)();

    (0, _accordion2.default)();

    (0, _autoToggleClassNav2.default)();
  });
});

},{"./accordion":1,"./autoToggleClassNav":2,"./homepage":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxhY2NvcmRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxhdXRvVG9nZ2xlQ2xhc3NOYXYuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQUs7O0FBRTFCLFVBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQSxtQkFBQSxFQUF1QyxZQUFZO0FBQzVDLGNBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEseUJBQUE7QUFEUCxTQUFBOztBQUlHLFVBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQSxvQkFBQSxFQUF3QyxZQUFZO0FBQ2hELGNBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxXQUFBLENBQUEseUJBQUE7QUFESixTQUFBOztBQUlBO0FBQ0gsVUFBQSwwQkFBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQTBDLFlBQVk7QUFDakQsY0FBQSwwQkFBQSxFQUFBLEdBQUEsQ0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLHFCQUFBO0FBQ0gsY0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLHFCQUFBO0FBRkYsU0FBQTtBQVhELEtBQUE7O3NCQWtCQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLEtBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixHQUFNO0FBQ2hDLE1BQU0sV0FBVyxPQUFBLFFBQUEsQ0FBakIsSUFBQTtBQUNBLFVBQUEsR0FBQSxDQUFBLFFBQUE7QUFDQSxNQUFHLFNBQUEsT0FBQSxDQUFBLFlBQUEsTUFBbUMsQ0FBdEMsQ0FBQSxFQUEwQztBQUN6QyxLQUFBLFlBQUEsRUFBQSxRQUFBLENBQUEsaUJBQUE7QUFDQTtBQUxGLEVBQUE7O21CQVFBLGtCOzs7Ozs7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SUFBQSxRQUFBLEVBQUEsS0FBQSxDQUFrQixZQUFVOztBQUUzQixLQUFBLEdBQUEsVUFBQSxVQUFBO0FBQ0EsS0FBQSxHQUFBLFVBQUEsYUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLFNBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxNQUFBO0FBQ0EsS0FBQSxHQUFBLFVBQUEsV0FBQTs7QUFFRCxLQUFBLEdBQUEsWUFBQSxPQUFBOztBQUVBLEtBQUEsR0FBQSxxQkFBQSxPQUFBO0FBVkEsR0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhY2NvcmRpb25GdW5jID0gKCk9PiB7XHJcblxyXG5cdCQoJy5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY2NvcmRpb25fX2l0ZW0tLWFjdGl2ZScpOyAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jb2xsYXBzZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWNjb3JkaW9uX19pdGVtLS1hY3RpdmUnKTsgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT1JBTkdFIFRJTUVTIElDT05cclxuXHQkKCcuYWNjb3JkaW9uX19pdGVtX19oZWFkZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIFx0JCgnLmFjY29yZGlvbl9faXRlbV9faGVhZGVyJykubm90KHRoaXMpLnJlbW92ZUNsYXNzKCdjaGFuZ2UtaGVhZGVyLWNvbG9yJyk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoYW5nZS1oZWFkZXItY29sb3InKTsgICAgIFxyXG5cdCAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjY29yZGlvbkZ1bmMiLCJjb25zdCBhdXRvVG9nZ2xlQ2xhc3NOYXYgPSAoKSA9PiB7XHJcblx0Y29uc3QgcGFnZUxpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRjb25zb2xlLmxvZyhwYWdlTGluayk7XHJcblx0aWYocGFnZUxpbmsuaW5kZXhPZihcImluZGV4Lmh0bWxcIikgPT09IC0xKSB7XHJcblx0XHQkKFwiLm15LW5hdmJhclwiKS5hZGRDbGFzcyhcIm5hdi1zZWNvbmQtdHlwZVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dG9Ub2dnbGVDbGFzc05hdiIsImNvbnN0IGFibGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgJCgnLnNlYXJjaC1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLmFkZENsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnc2VhcmNoLWFjdGl2ZScpOyBcbiAgICB9KVxufVxuXG5jb25zdCBkaXNhYmxlU2VhcmNoID0gKCkgPT4ge1xuICAgICQoJy50aW1lcy1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnc2VhcmNoLWFjdGl2ZScpO1xuICAgIH0pICBcblxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgX3RoaXMgPSAkKGUudGFyZ2V0KTtcblxuICAgICAgICBpZighX3RoaXMuY2xvc2VzdCgnLnNlYXJjaCcpLmxlbmd0aCAmJiAhX3RoaXMuaGFzQ2xhc3MoJ3NlYXJjaCcpKSB7XG4gICAgICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcbiAgICAgICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnc2VhcmNoLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHRvZ2dsZU5hdiA9IGUgPT4ge1xuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcubG9nbycpLnRvZ2dsZUNsYXNzKCdkLW5vbmUnKTsgXG4gICAgICAgICQoJy5udi1jb2xsYXBzZScpLnRvZ2dsZUNsYXNzKCd0b2dnbGUtbmF2Jyk7XG4gICAgfSk7XG4gICAgXG4gICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2hhbWJ1cmdlci1hY3RpdmUnKTtcbiAgICB9KTtcbn1cblxuY29uc3QgdG9Eb3duID0gKCkgPT4ge1xuICAgICQoXCIudG9wLWNvbnRlbnRfX2luZm8tYm94X190cmlhbmdsZVwiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvcFBvcyA9ICQoXCIjc2VydmljZXMtaGVhZGVyXCIpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgJChcImh0bWwsYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcFBvcy01MH0sNzAwKTtcbiAgICB9KVxufVxuXG5jb25zdCBzbGlja1NsaWRlciA9ICgpID0+IHtcbiAgICAkKFwiLm15LXNsaWRlci1hcmVhXCIpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiB0cnVlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDYwMCxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgcHJldi1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBuZXh0LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPicsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdICAgICAgIFxufSk7XG59XG5cbmV4cG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXYsdG9Eb3duLHNsaWNrU2xpZGVyfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQge2FibGVTZWFyY2gsIGRpc2FibGVTZWFyY2gsdG9nZ2xlTmF2LHRvRG93bixzbGlja1NsaWRlcn0gZnJvbSAnLi9ob21lcGFnZSdcbmltcG9ydCBhY2NvcmRpb25GdW5jIGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCBhdXRvVG9nZ2xlQ2xhc3NOYXYgZnJvbSBcIi4vYXV0b1RvZ2dsZUNsYXNzTmF2XCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiBhYmxlU2VhcmNoKCk7XG4gZGlzYWJsZVNlYXJjaCgpXG4gdG9nZ2xlTmF2KCk7XG4gdG9Eb3duKCk7XG4gc2xpY2tTbGlkZXIoKTtcblxuYWNjb3JkaW9uRnVuYygpO1xuIFxuYXV0b1RvZ2dsZUNsYXNzTmF2KCk7XG5cbn0pOyJdfQ==
