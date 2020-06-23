$(document).ready(function () {
    $('.menu-burger').click(function (event) {
        $('.menu-burger,.nav,.menu-burger__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.search__button').click(function (event) {
        $('.search__input,.search__img,.search__close').toggleClass('active');
    });
});


