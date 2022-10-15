/* LOADING THE DOCUMENT */
$(document).ready(function () {

    /* USING MOUSE HOVER EVENT FOR CHANGING THE LOGO */
    $("#logo").hover(function(){
        $("#logo").attr("src","brandstar-images/brandstar-Logo-2.png");
    },function(){
        $("#logo").attr("src","brandstar-images/brandstar-Logo-1.png");
    });

    /* HAMBURGER TOGGLE */
    $(".hamburger_menu").on("click", function () {
        $("#nav_container").slideToggle();
        $(".hamburger_menu").toggleClass("toggle");
    });
});
