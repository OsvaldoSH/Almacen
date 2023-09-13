$(document).ready(function() {
    $(".menu-toggle").click(function() {
        $(".menu").toggleClass("show");
        $(".content").toggleClass("expand");
    });
});
