$(function(){
    var mixer = mixitup('.portfolio__content');
    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arrow-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arrow-right.png" alt=""></button>'
    });
});