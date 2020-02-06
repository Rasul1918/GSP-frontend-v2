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
            $('.my-navbar').toggleClass('BG-black');
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

},{}],3:[function(require,module,exports){
'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./homepage', './accordion'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./homepage'), require('./accordion'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.homepage, global.accordion);
    global.main = mod.exports;
  }
})(undefined, function (_homepage, _accordion) {
  'use strict';

  var _accordion2 = _interopRequireDefault(_accordion);

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
  });
});

},{"./accordion":1,"./homepage":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxhY2NvcmRpb24uanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFFBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQUs7O0FBRTFCLFVBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQSxtQkFBQSxFQUF1QyxZQUFZO0FBQzVDLGNBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEseUJBQUE7QUFEUCxTQUFBOztBQUlHLFVBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQSxvQkFBQSxFQUF3QyxZQUFZO0FBQ2hELGNBQUEsSUFBQSxFQUFBLE1BQUEsR0FBQSxXQUFBLENBQUEseUJBQUE7QUFESixTQUFBOztBQUlBO0FBQ0gsVUFBQSwwQkFBQSxFQUFBLEVBQUEsQ0FBQSxPQUFBLEVBQTBDLFlBQVk7QUFDakQsY0FBQSwwQkFBQSxFQUFBLEdBQUEsQ0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLHFCQUFBO0FBQ0gsY0FBQSxJQUFBLEVBQUEsV0FBQSxDQUFBLHFCQUFBO0FBRkYsU0FBQTtBQVhELEtBQUE7O3NCQWtCQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxRQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07QUFDckIsVUFBQSxjQUFBLEVBQUEsS0FBQSxDQUF3QixZQUFVO0FBQzlCLGNBQUEsWUFBQSxFQUFBLFFBQUEsQ0FBQSx3QkFBQTtBQUNBLGNBQUEsWUFBQSxFQUFBLFFBQUEsQ0FBQSxlQUFBO0FBRkosU0FBQTtBQURKLEtBQUE7O0FBT0EsUUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBTTtBQUN4QixVQUFBLGFBQUEsRUFBQSxLQUFBLENBQXVCLFlBQVU7QUFDN0IsY0FB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b250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgYWNjb3JkaW9uRnVuYyA9ICgpPT4ge1xyXG5cclxuXHQkKCcuY29sbGFwc2UnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWNjb3JkaW9uX19pdGVtLS1hY3RpdmUnKTsgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjY29yZGlvbl9faXRlbS0tYWN0aXZlJyk7ICBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9SQU5HRSBUSU1FUyBJQ09OXHJcblx0JCgnLmFjY29yZGlvbl9faXRlbV9faGVhZGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdCAgICBcdCQoJy5hY2NvcmRpb25fX2l0ZW1fX2hlYWRlcicpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygnY2hhbmdlLWhlYWRlci1jb2xvcicpO1xyXG5cdFx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjaGFuZ2UtaGVhZGVyLWNvbG9yJyk7ICAgICBcclxuXHQgICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb25GdW5jIiwiY29uc3QgYWJsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAkKCcuc2VhcmNoLWljb24nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcubXktbmF2YmFyJykuYWRkQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLmFkZENsYXNzKCdzZWFyY2gtYWN0aXZlJyk7IFxuICAgIH0pXG59XG5cbmNvbnN0IGRpc2FibGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgJCgnLnRpbWVzLWljb24nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzZWFyY2gtYWN0aXZlJyk7XG4gICAgfSkgIFxuXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBfdGhpcyA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgIGlmKCFfdGhpcy5jbG9zZXN0KCcuc2VhcmNoJykubGVuZ3RoICYmICFfdGhpcy5oYXNDbGFzcygnc2VhcmNoJykpIHtcbiAgICAgICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdzZWFyY2gtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3QgdG9nZ2xlTmF2ID0gZSA9PiB7XG4gICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS50b2dnbGVDbGFzcygnQkctYmxhY2snKTsgXG4gICAgICAgICQoJy5sb2dvJykudG9nZ2xlQ2xhc3MoJ2Qtbm9uZScpOyBcbiAgICAgICAgJCgnLm52LWNvbGxhcHNlJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1uYXYnKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGFtYnVyZ2VyLWFjdGl2ZScpO1xuICAgIH0pO1xufVxuXG5jb25zdCB0b0Rvd24gPSAoKSA9PiB7XG4gICAgJChcIi50b3AtY29udGVudF9faW5mby1ib3hfX3RyaWFuZ2xlXCIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9wUG9zID0gJChcIiNzZXJ2aWNlcy1oZWFkZXJcIikub2Zmc2V0KCkudG9wO1xuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wUG9zLTUwfSw3MDApO1xuICAgIH0pXG59XG5cbmNvbnN0IHNsaWNrU2xpZGVyID0gKCkgPT4ge1xuICAgICQoXCIubXktc2xpZGVyLWFyZWFcIikuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBzcGVlZDogNjAwLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZS1hcnJvdyBwcmV2LWFycm93XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IG5leHQtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+JyxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0gICAgICAgXG59KTtcbn1cblxuZXhwb3J0IHthYmxlU2VhcmNoLCBkaXNhYmxlU2VhcmNoLHRvZ2dsZU5hdix0b0Rvd24sc2xpY2tTbGlkZXJ9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7YWJsZVNlYXJjaCwgZGlzYWJsZVNlYXJjaCx0b2dnbGVOYXYsdG9Eb3duLHNsaWNrU2xpZGVyfSBmcm9tICcuL2hvbWVwYWdlJ1xuaW1wb3J0IGFjY29yZGlvbkZ1bmMgZnJvbSAnLi9hY2NvcmRpb24nO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gYWJsZVNlYXJjaCgpO1xuIGRpc2FibGVTZWFyY2goKVxuIHRvZ2dsZU5hdigpO1xuIHRvRG93bigpO1xuIHNsaWNrU2xpZGVyKCk7XG5cbmFjY29yZGlvbkZ1bmMoKTtcbiBcblxufSk7Il19
