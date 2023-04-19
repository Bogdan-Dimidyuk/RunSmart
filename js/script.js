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
toggleSlide('.catalog-item__back');
// modal
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('fast');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
});
$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
    });
});
// validation
function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: 'required',
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Минимальное количество символов: {0}")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Нам нужен ваш email для контакта с вами",
                email: "Ваш email должен быть в таком формате: name@domain.com"
            }
        }
    });
}
validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');
// Masked Input
$('input[name=phone]').mask("+7 (999) 999-99-99");
// mailer
$('form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
        return; // функция прекращается, если форма не проходит валидацию
    }
    $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()        
    }).done(function() {
        $(this).find('input').val('');
        $('#consultation, #order').fadeOut();
        $('overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});
// smooth scroll and pageUp
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageUp').fadeIn('slow');
    } else {
        $('.pageUp').fadeOut('slow');
    }
});
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function() {
            window.location.hash = hash;
            });
        }
    });
});
new WOW().init();