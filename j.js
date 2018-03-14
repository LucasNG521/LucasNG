$('a[href="#about"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
});

$('a[href="#interest"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
});

$('a[href="#contact"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
});

$('a[href="#pagetop"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
});

$('#img1').click(function () {
    $('#slide').slideDown(5000);
});

$('#img').click(function () {
    $('.min').toggleClass('max');
})

$('#img2').click(function () {
    $('.min2').toggleClass('max');
})

$('#img3').click(function () {
    $('.min3').toggleClass('max');
})

$('#img4').click(function () {
    $('.min4').toggleClass('max');
})

$('#img5').click(function () {
    $('.min5').toggleClass('max');
})

$('#img6').click(function () {
    $('.min6').toggleClass('max');
})