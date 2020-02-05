const accordionFunc = ()=> {

	$('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().addClass('accordion__item--active');       
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).parent().removeClass('accordion__item--active');  
    });

// // ORANGE TIMES ICON
// 	$('.accordion__head').on('click', function () {
// 	    	$('.accordion__head').not(this).removeClass('plusChangeColor');
// 			$(this).toggleClass('plusChangeColor');     
// 	    });

}

export default accordionFunc