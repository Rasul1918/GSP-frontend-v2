const ableSearch = () => {
    $('.search-icon').click(function(){
        $('.my-navbar').addClass('justify-content-center');
        $('.my-navbar').addClass('search-active'); 
    })
}

const disableSearch = () => {
    $('.times-icon').click(function(){
        $('.my-navbar').removeClass('justify-content-center');
        $('.my-navbar').removeClass('search-active');
    })  

    $(document).click(function(e) {
        const _this = $(e.target);

        if(!_this.closest('.search').length && !_this.hasClass('search')) {
            $('.my-navbar').removeClass('justify-content-center');
            $('.my-navbar').removeClass('search-active');
        }
    });
}

const toggleNav = e => {
    $('.hamburger').click(function(){
        $('.my-navbar').toggleClass('BG-black'); 
        $('.logo').toggleClass('d-none'); 
        $('.nv-collapse').toggleClass('toggle-nav');
    });
    
    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger-active');
    });
}

const toDown = () => {
    $(".top-content__info-box__triangle").click(() => {
        const topPos = $("#services-header").offset().top;
        $("html,body").animate({scrollTop: topPos-50},700);
    })
}

const slickSlider = () => {
    $(".my-slider").slick({
        dots: true,
        slidesToShow: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        arrows: true,
        // centerMode: true,
        // prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
        }
    ]       
});
}

export {ableSearch, disableSearch,toggleNav,toDown,slickSlider}
