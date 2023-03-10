const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    speed: 700,
    responsive: {
        320: {
            autoplay: true
        },
        545: {
            fixedWidth: 320
        },
        576: {
            fixedWidth: 470
        },
        580: {
            fixedWidth: 500
        },
        610: {
            fixedWidth: 530
        },
        647: {
            fixedWidth: 560
        },
        677: {
            fixedWidth: 590
        },
        707: {
            fixedWidth: 620
        },
        738: {
            fixedWidth: 650
        },
        768: {
            fixedWidth: 700,
            autoplay: false
        },
        900: {
            fixedWidth: 750
        },
        992: {
            fixedWidth: 900
        },
        1100: {
            fixedWidth: false
        }
    }
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            let index = $(this).index(item);
            $('.catalog-item__content').eq(index).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(index).toggleClass('catalog-item__list_active');
        })
    });
}
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back')