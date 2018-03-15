
$('#img1').click(function () {
    $('#slide').slideDown(5000);
});


$('body').on('click','a[href*="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});