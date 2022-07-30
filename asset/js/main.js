$(document).ready(function(){

    var yourNavigation = $("header");
        stickyDiv = "scrolled";

    $(window).scroll(function() {
    if( $(this).scrollTop() > 300 ) {
        yourNavigation.addClass(stickyDiv);
    } else {
        yourNavigation.removeClass(stickyDiv);
    }
    });

});