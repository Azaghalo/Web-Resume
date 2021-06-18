var $doc = $('html,body');
$('.menu').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 500);
    return false;
});

$('nav.mobile').click(function () {
    var menuList = $('nav.mobile ul');
    menuList.slideToggle(150);
});

$('nav.mobile a').click(function () {
    var menuList = $('nav.mobile ul');
    menuList.slideToggle(150);
});

$('[language]').hide();
$('[language = "en"]').show();

$('#lang-switch').change(function () {
    var lang = $(this).val();
    switch (lang) {
        case 'en':
            $('[language]').hide();
            $('[language="en"]').fadeIn(500);
            break;
        case 'br':
            $('[language]').hide();
            $('[language="br"]').fadeIn(500);
            break;
        default:
            $('[language]').hide();
            $('[language="br"]').fadeIn(500);
    }
});

var curSlide = 0;

var maxSlides = $('.banner-img').length - 1;

var changeDelay = 3;

if (maxSlides > 0) {
    initSlider();
    changeSlide();
}

function initSlider() {
    $('.banner-img').hide();
    $('.banner-img').eq(0).show();
}

function changeSlide() {
    setInterval(function () {
        $('.banner-img').eq(curSlide).fadeOut(1000);
        curSlide++;
        if (curSlide > maxSlides) {
            curSlide = 0;
        }
        $('.banner-img').eq(curSlide).fadeIn(1000);
    }, changeDelay * 1000);
}