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

    $(".thumb").click(function(){
        $(".tab-group").removeClass("show");
        $($(this).attr("data-target")).addClass("show");
    });

    
    var select = $('.dist-header select');

    $(".points a").click(function(p){
        p.preventDefault();
        $(".dist-list").removeClass("show");
        $($(this).attr("href")).addClass("show");

        $(select).children().attr("value" = $(this).attr("href")).select();
    });

    select.on('change', function(){
        var selectedOptionText = $(this).children(':selected').val();
        
        $(".dist-list").removeClass("show");
        $("#" + selectedOptionText).addClass("show");
    });

    $(".burger-bt").click(function(bb){
        bb.preventDefault();

        $("header").toggleClass("show-mob-menu");
        $("header").addClass("scrolled");
        $(".burger-bt i").toggleClass("fa-bars fa-times");
    });

});