$(document).ready(function() {
$('.free').click(function(){
    $('#thankYou').show();
    $('.content').hide();
    setTimeout(function(){
        window.location.replace("members.html");
    },1500);
});;
}); 