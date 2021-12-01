$(document).ready(function () {
    $('.head1-slider').slick({
        autoplay: true,
        // autoplaySpeed: 2000,
        // dots: false,
        // fade: false,
        // adaptiveHeight: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});
$(document).ready(function () {
    $('.slider-1').slick({
        autoplay: false,
        autoplaySpeed: 3000,
     // dots: false,
     // fade: false,
     // adaptiveHeight: true,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});
$(document).ready(function () {
    $('.slider-2').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        //dots: false,
        //fade: false,
        //adaptiveHeight: true,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});


