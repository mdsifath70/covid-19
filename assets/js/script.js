// all js CODE

$(function() {
    // toggle menu
    $("#menu_toggle").click(function() {
        $("#menu_toggle i").toggleClass("fa-times");
        $(".navbarNav").toggleClass("active");
    });

    $(window).on("load scroll", function() {
        let currentTop = $(window).scrollTop();

        $("#menu_toggle i").removeClass("fa-times");
        $(".navbarNav").removeClass("active");

        if (currentTop > 0) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }

        // on scroll to top btn
        if (currentTop > 300) {
            $(".scroll_top").show();
        } else {
            $(".scroll_top").hide();
        }

        // scroll Spy
        $("section").each(function(index) {
            var elemTop = $(this).offset().top - 200;
            var elemBottom = elemTop + $(this).height();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                var id = $(this).attr("id");
                var navElem = $('a[href="#' + id + '"]');
                navElem.parent().addClass("active").siblings().removeClass("active");
            }
        });
    });
});