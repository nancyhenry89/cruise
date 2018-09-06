$(document).ready(function() {
    $('.popup-title').click(function() {
        $(this).siblings('.popup-cont').fadeIn();
    });
    $('.close').click(function() {
        $(this).parents('.popup-cont').fadeOut();
    });

$('.free').click(function(){
    $('#thankYou').show();
    $('.content').hide();
    setTimeout(function(){
        window.location.replace("members.html");
    },1500);
});;
}); 