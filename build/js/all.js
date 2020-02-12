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
        $('.accordion-btn').on('click', function () {
            $('.accordion-btn').not(this).removeClass('change-header-color');
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
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.lazyload = mod.exports;
	}
})(undefined, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var lazyload = function lazyload() {
		try {
			$('[b-lazyload]').each(function (e) {
				var _this = $(this);
				var newSrc = _this.data('src');
				_this.prop('src', newSrc);
			});
		} catch (e) {
			console.error('b-debug', e);
		}
	};

	exports.default = lazyload;
	module.exports = exports['default'];
});

},{}],5:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./homepage', './accordion', './autoToggleClassNav', './lazyload'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./homepage'), require('./accordion'), require('./autoToggleClassNav'), require('./lazyload'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.homepage, global.accordion, global.autoToggleClassNav, global.lazyload);
    global.main = mod.exports;
  }
})(undefined, function (_homepage, _accordion, _autoToggleClassNav, _lazyload) {
  'use strict';

  var _accordion2 = _interopRequireDefault(_accordion);

  var _autoToggleClassNav2 = _interopRequireDefault(_autoToggleClassNav);

  var _lazyload2 = _interopRequireDefault(_lazyload);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  $(document).ready(function () {
    (0, _lazyload2.default)();

    (0, _homepage.ableSearch)();
    (0, _homepage.disableSearch)();
    (0, _homepage.toggleNav)();
    (0, _homepage.toDown)();
    (0, _homepage.slickSlider)();

    (0, _accordion2.default)();

    (0, _autoToggleClassNav2.default)();
  });
});

},{"./accordion":1,"./autoToggleClassNav":2,"./homepage":3,"./lazyload":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxhY2NvcmRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxhdXRvVG9nZ2xlQ2xhc3NOYXYuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXGxhenlsb2FkLmpzIiwic3JjXFxqc1xcbWFpblxcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsUUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBSzs7QUFFMUIsVUFBQSxXQUFBLEVBQUEsRUFBQSxDQUFBLG1CQUFBLEVBQXVDLFlBQVk7QUFDNUMsY0FBQSxJQUFBLEVBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSx5QkFBQTtBQURQLFNBQUE7O0FBSUcsVUFBQSxXQUFBLEVBQUEsRUFBQSxDQUFBLG9CQUFBLEVBQXdDLFlBQVk7QUFDaEQsY0FBQSxJQUFBLEVBQUEsTUFBQSxHQUFBLFdBQUEsQ0FBQSx5QkFBQTtBQURKLFNBQUE7O0FBSUE7QUFDSCxVQUFBLGdCQUFBLEVBQUEsRUFBQSxDQUFBLE9BQUEsRUFBZ0MsWUFBWTtBQUN2QyxjQUFBLGdCQUFBLEVBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxXQUFBLENBQUEscUJBQUE7QUFDSCxjQUFBLElBQUEsRUFBQSxXQUFBLENBQUEscUJBQUE7QUFGRixTQUFBO0FBWEQsS0FBQTs7c0JBa0JBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsS0FBTSxxQkFBcUIsU0FBckIsa0JBQXFCLEdBQU07QUFDaEMsTUFBTSxXQUFXLE9BQUEsUUFBQSxDQUFqQixJQUFBO0FBQ0EsVUFBQSxHQUFBLENBQUEsUUFBQTtBQUNBLE1BQUcsU0FBQSxPQUFBLENBQUEsWUFBQSxNQUFtQyxDQUF0QyxDQUFBLEVBQTBDO0FBQ3pDLEtBQUEsWUFBQSxFQUFBLFFBQUEsQ0FBQSxpQkFBQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBLEtBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSztBQUNyQixNQUFJO0FBQ0gsS0FBQSxjQUFBLEVBQUEsSUFBQSxDQUF1QixVQUFBLENBQUEsRUFBVztBQUNqQyxRQUFNLFFBQVEsRUFBZCxJQUFjLENBQWQ7QUFDQSxRQUFNLFNBQVMsTUFBQSxJQUFBLENBQWYsS0FBZSxDQUFmO0FBQ0EsVUFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE1BQUE7QUFIRCxJQUFBO0FBREQsR0FBQSxDQU9FLE9BQUEsQ0FBQSxFQUFRO0FBQ1QsV0FBQSxLQUFBLENBQUEsU0FBQSxFQUFBLENBQUE7QUFDQTtBQVZGLEVBQUE7O21CQWFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7QUFDNUIsS0FBQSxHQUFBLFdBQUEsT0FBQTs7QUFFQyxLQUFBLEdBQUEsVUFBQSxVQUFBO0FBQ0EsS0FBQSxHQUFBLFVBQUEsYUFBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLFNBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxNQUFBO0FBQ0EsS0FBQSxHQUFBLFVBQUEsV0FBQTs7QUFFRCxLQUFBLEdBQUEsWUFBQSxPQUFBOztBQUVBLEtBQUEsR0FBQSxxQkFBQSxPQUFBO0FBWEEsR0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhY2NvcmRpb25GdW5jID0gKCk9PiB7XHJcblxyXG5cdCQoJy5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY2NvcmRpb25fX2l0ZW0tLWFjdGl2ZScpOyAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jb2xsYXBzZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWNjb3JkaW9uX19pdGVtLS1hY3RpdmUnKTsgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT1JBTkdFIFRJTUVTIElDT05cclxuXHQkKCcuYWNjb3JkaW9uLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHQgICAgXHQkKCcuYWNjb3JkaW9uLWJ0bicpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygnY2hhbmdlLWhlYWRlci1jb2xvcicpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjaGFuZ2UtaGVhZGVyLWNvbG9yJyk7ICAgICBcclxuXHQgICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb25GdW5jIiwiY29uc3QgYXV0b1RvZ2dsZUNsYXNzTmF2ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHBhZ2VMaW5rID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0Y29uc29sZS5sb2cocGFnZUxpbmspO1xyXG5cdGlmKHBhZ2VMaW5rLmluZGV4T2YoXCJpbmRleC5odG1sXCIpID09PSAtMSkge1xyXG5cdFx0JChcIi5teS1uYXZiYXJcIikuYWRkQ2xhc3MoXCJuYXYtc2Vjb25kLXR5cGVcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRvVG9nZ2xlQ2xhc3NOYXYiLCJjb25zdCBhYmxlU2VhcmNoID0gKCkgPT4ge1xuICAgICQoJy5zZWFyY2gtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAkKCcubXktbmF2YmFyJykuYWRkQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTsgXG4gICAgfSlcbn1cblxuY29uc3QgZGlzYWJsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAkKCcudGltZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcbiAgICB9KSAgXG5cbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gJChlLnRhcmdldCk7XG5cbiAgICAgICAgaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2gnKS5sZW5ndGggJiYgIV90aGlzLmhhc0NsYXNzKCdzZWFyY2gnKSkge1xuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XG4gICAgICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCB0b2dnbGVOYXYgPSBlID0+IHtcbiAgICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLmxvZ28nKS50b2dnbGVDbGFzcygnZC1ub25lJyk7IFxuICAgICAgICAkKCcubnYtY29sbGFwc2UnKS50b2dnbGVDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgIH0pO1xuICAgIFxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoYW1idXJnZXItYWN0aXZlJyk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHRvRG93biA9ICgpID0+IHtcbiAgICAkKFwiLnRvcC1jb250ZW50X19pbmZvLWJveF9fdHJpYW5nbGVcIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3BQb3MgPSAkKFwiI3NlcnZpY2VzLWhlYWRlclwiKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3BQb3MtNTB9LDcwMCk7XG4gICAgfSlcbn1cblxuY29uc3Qgc2xpY2tTbGlkZXIgPSAoKSA9PiB7XG4gICAgJChcIi5teS1zbGlkZXItYXJlYVwiKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNwZWVkOiA2MDAsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgICAgICBcbn0pO1xufVxuXG5leHBvcnQge2FibGVTZWFyY2gsIGRpc2FibGVTZWFyY2gsdG9nZ2xlTmF2LHRvRG93bixzbGlja1NsaWRlcn1cbiIsImNvbnN0IGxhenlsb2FkID0gKCk9PiB7XHJcblx0dHJ5IHtcclxuXHRcdCQoJ1tiLWxhenlsb2FkXScpLmVhY2goZnVuY3Rpb24oZSl7XHJcblx0XHRcdGNvbnN0IF90aGlzID0gJCh0aGlzKVxyXG5cdFx0XHRjb25zdCBuZXdTcmMgPSBfdGhpcy5kYXRhKCdzcmMnKVxyXG5cdFx0XHRfdGhpcy5wcm9wKCdzcmMnLCBuZXdTcmMpXHJcblxyXG5cdFx0fSlcclxuXHR9IGNhdGNoKGUpe1xyXG5cdFx0Y29uc29sZS5lcnJvcignYi1kZWJ1ZycsIGUpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsYXp5bG9hZCIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHthYmxlU2VhcmNoLCBkaXNhYmxlU2VhcmNoLHRvZ2dsZU5hdix0b0Rvd24sc2xpY2tTbGlkZXJ9IGZyb20gJy4vaG9tZXBhZ2UnXG5pbXBvcnQgYWNjb3JkaW9uRnVuYyBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgYXV0b1RvZ2dsZUNsYXNzTmF2IGZyb20gXCIuL2F1dG9Ub2dnbGVDbGFzc05hdlwiO1xuaW1wb3J0IGxhenlsb2FkIGZyb20gXCIuL2xhenlsb2FkXCJcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbmxhenlsb2FkKClcblxuIGFibGVTZWFyY2goKTtcbiBkaXNhYmxlU2VhcmNoKClcbiB0b2dnbGVOYXYoKTtcbiB0b0Rvd24oKTtcbiBzbGlja1NsaWRlcigpO1xuXG5hY2NvcmRpb25GdW5jKCk7XG4gXG5hdXRvVG9nZ2xlQ2xhc3NOYXYoKTtcblxufSk7Il19
