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
        }, _defineProperty(_$$slick, 'slidesToShow', 4), _defineProperty(_$$slick, 'slidesToScroll', 1), _defineProperty(_$$slick, 'speed', 600), _defineProperty(_$$slick, 'arrows', true), _defineProperty(_$$slick, 'prevArrow', '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>'), _defineProperty(_$$slick, 'nextArrow', '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'), _defineProperty(_$$slick, 'responsive', [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 500,
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
    (0, _homepage.toDown)();
    (0, _homepage.slickSlider)();
  });
});

},{"./homepage":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxtYWluXFxob21lcGFnZS5qcyIsInNyY1xcanNcXG1haW5cXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxRQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07QUFDckIsVUFBQSxjQUFBLEVBQUEsS0FBQSxDQUF3QixZQUFVO0FBQzlCLGNBQUEsWUFBQSxFQUFBLFFBQUEsQ0FBQSx3QkFBQTtBQUNBLGNBQUEsWUFBQSxFQUFBLFFBQUEsQ0FBQSxlQUFBO0FBRkosU0FBQTtBQURKLEtBQUE7O0FBT0EsUUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBTTtBQUN4QixVQUFBLGFBQUEsRUFBQSxLQUFBLENBQXVCLFlBQVU7QUFDN0IsY0FBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLHdCQUFBO0FBQ0EsY0FBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLGVBQUE7QUFGSixTQUFBOztBQUtBLFVBQUEsUUFBQSxFQUFBLEtBQUEsQ0FBa0IsVUFBQSxDQUFBLEVBQVk7QUFDMUIsZ0JBQU0sUUFBUSxFQUFFLEVBQWhCLE1BQWMsQ0FBZDs7QUFFQSxnQkFBRyxDQUFDLE1BQUEsT0FBQSxDQUFBLFNBQUEsRUFBRCxNQUFBLElBQW9DLENBQUMsTUFBQSxRQUFBLENBQXhDLFFBQXdDLENBQXhDLEVBQWtFO0FBQzlELGtCQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsd0JBQUE7QUFDQSxrQkFBQSxZQUFBLEVBQUEsV0FBQSxDQUFBLGVBQUE7QUFDSDtBQU5MLFNBQUE7QUFOSixLQUFBOztBQWdCQSxRQUFNLFlBQVksU0FBWixTQUFZLENBQUEsQ0FBQSxFQUFLO0FBQ25CLFVBQUEsWUFBQSxFQUFBLEtBQUEsQ0FBc0IsWUFBVTtBQUM1QixjQUFBLFlBQUEsRUFBQSxXQUFBLENBQUEsVUFBQTtBQUNBLGNBQUEsT0FBQSxFQUFBLFdBQUEsQ0FBQSxRQUFBO0FBQ0EsY0FBQSxjQUFBLEVBQUEsV0FBQSxDQUFBLFlBQUE7QUFISixTQUFBOztBQU1BLFVBQUEsWUFBQSxFQUFBLEtBQUEsQ0FBc0IsWUFBVTtBQUM1QixjQUFBLElBQUEsRUFBQSxXQUFBLENBQUEsa0JBQUE7QUFESixTQUFBO0FBUEosS0FBQTs7QUFZQSxRQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDakIsVUFBQSxrQ0FBQSxFQUFBLEtBQUEsQ0FBNEMsWUFBTTtBQUM5QyxnQkFBTSxTQUFTLEVBQUEsa0JBQUEsRUFBQSxNQUFBLEdBQWYsR0FBQTtBQUNBLGNBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBdUIsRUFBQyxXQUFXLFNBQW5DLEVBQXVCLEVBQXZCLEVBQUEsR0FBQTtBQUZKLFNBQUE7QUFESixLQUFBOztBQU9BLFFBQU0sY0FBYyxTQUFkLFdBQWMsR0FBTTtBQUFBLFlBQUEsUUFBQTs7QUFDdEIsVUFBQSxpQkFBQSxFQUFBLEtBQUEsRUFBQSxXQUFBO0FBQ0ksa0JBREosSUFBQTtBQUVJLDBCQUZ1QjtBQUEzQixTQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLGNBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxnQkFBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxvRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxxRkFBQSxDQUFBLEVBQUEsZ0JBQUEsUUFBQSxFQUFBLFlBQUEsRUFXZ0IsQ0FDVjtBQUNFLHdCQURGLEdBQUE7QUFFRSxzQkFBVTtBQUNSLDhCQUFjO0FBRE47QUFGWixTQURVLEVBT1o7QUFDSSx3QkFESixHQUFBO0FBRUksc0JBQVU7QUFDUiw4QkFBYztBQUROO0FBRmQsU0FQWSxDQVhoQixDQUFBLEVBQUEsUUFBQTtBQURKLEtBQUE7O1lBNkJBLFUsR0FBQSxVO1lBQUEsYSxHQUFBLGE7WUFBQSxTLEdBQUEsUztZQUFBLE0sR0FBQSxNO1lBQUEsVyxHQUFBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQSxJQUFBLFFBQUEsRUFBQSxLQUFBLENBQWtCLFlBQVU7O0FBRTNCLEtBQUEsR0FBQSxVQUFBLFVBQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxhQUFBO0FBQ0EsS0FBQSxHQUFBLFVBQUEsU0FBQTtBQUNBLEtBQUEsR0FBQSxVQUFBLE1BQUE7QUFDQSxLQUFBLEdBQUEsVUFBQSxXQUFBO0FBTkQsR0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBhYmxlU2VhcmNoID0gKCkgPT4ge1xuICAgICQoJy5zZWFyY2gtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAkKCcubXktbmF2YmFyJykuYWRkQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTsgXG4gICAgfSlcbn1cblxuY29uc3QgZGlzYWJsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAkKCcudGltZXMtaWNvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5teS1uYXZiYXInKS5yZW1vdmVDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcbiAgICB9KSAgXG5cbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IF90aGlzID0gJChlLnRhcmdldCk7XG5cbiAgICAgICAgaWYoIV90aGlzLmNsb3Nlc3QoJy5zZWFyY2gnKS5sZW5ndGggJiYgIV90aGlzLmhhc0NsYXNzKCdzZWFyY2gnKSkge1xuICAgICAgICAgICAgJCgnLm15LW5hdmJhcicpLnJlbW92ZUNsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyk7XG4gICAgICAgICAgICAkKCcubXktbmF2YmFyJykucmVtb3ZlQ2xhc3MoJ3NlYXJjaC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCB0b2dnbGVOYXYgPSBlID0+IHtcbiAgICAkKCcuaGFtYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm15LW5hdmJhcicpLnRvZ2dsZUNsYXNzKCdCRy1ibGFjaycpOyBcbiAgICAgICAgJCgnLmxvZ28nKS50b2dnbGVDbGFzcygnZC1ub25lJyk7IFxuICAgICAgICAkKCcubnYtY29sbGFwc2UnKS50b2dnbGVDbGFzcygndG9nZ2xlLW5hdicpO1xuICAgIH0pO1xuICAgIFxuICAgICQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdoYW1idXJnZXItYWN0aXZlJyk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHRvRG93biA9ICgpID0+IHtcbiAgICAkKFwiLnRvcC1jb250ZW50X19pbmZvLWJveF9fdHJpYW5nbGVcIikuY2xpY2soKCkgPT4ge1xuICAgICAgICBjb25zdCB0b3BQb3MgPSAkKFwiI3NlcnZpY2VzLWhlYWRlclwiKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3BQb3MtNTB9LDcwMCk7XG4gICAgfSlcbn1cblxuY29uc3Qgc2xpY2tTbGlkZXIgPSAoKSA9PiB7XG4gICAgJChcIi5teS1zbGlkZXItYXJlYVwiKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIHNwZWVkOiA2MDAsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlLWFycm93IHByZXYtYXJyb3dcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGUtYXJyb3cgbmV4dC1hcnJvd1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj4nLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSAgICAgICBcbn0pO1xufVxuXG5leHBvcnQge2FibGVTZWFyY2gsIGRpc2FibGVTZWFyY2gsdG9nZ2xlTmF2LHRvRG93bixzbGlja1NsaWRlcn1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHthYmxlU2VhcmNoLCBkaXNhYmxlU2VhcmNoLHRvZ2dsZU5hdix0b0Rvd24sc2xpY2tTbGlkZXJ9IGZyb20gJy4vaG9tZXBhZ2UnXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gYWJsZVNlYXJjaCgpO1xuIGRpc2FibGVTZWFyY2goKVxuIHRvZ2dsZU5hdigpO1xuIHRvRG93bigpO1xuIHNsaWNrU2xpZGVyKCk7XG5cblxuIFxuIFxuXG59KTsiXX0=
