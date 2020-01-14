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

export {ableSearch, disableSearch,toggleNav}
