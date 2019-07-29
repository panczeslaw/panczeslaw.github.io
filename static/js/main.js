$('.sidenav-toggler').click(function(e){
  var ws = $('.sidenav').width();
  if (ws == 0) {
    $('.sidenav').width('16rem');
    $('.sidenav-toggler').css('left','0px');
    $('.sidenav-toggler').toggleClass('change');
  } else if (ws == 256) {
    $('.sidenav').width('0px');
    $('.sidenav-toggler').css('left','1rem');
    $('.sidenav-toggler').toggleClass('change');
  }
  e.stopPropagation();
});
$('.nav-link').click(function(e){
  $('.sidenav').width('0px');
  $('.sidenav-toggler').toggleClass('change');
  $('.sidenav-toggler').css('left','1rem');
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  e.stopPropagation();
});
$(document).ready(function(){
  age = Math.floor((Math.floor(Date.now() / 1000) - 961891200) / 31557600);
  $("#age-field").val(age);
});