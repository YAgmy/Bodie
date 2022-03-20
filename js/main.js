
$(function () {
    $('.work li').on('click', function () {
        $(this).addClass("active rounded-pill").siblings().removeClass("active");
    });
    $('.designbtn').on('click', function () {
        $(".work .row .code").fadeOut("fast"), function () {
            $(".work .row .design").fadeIn("fast")
        };
        $(".work .row .app").fadeOut("fast"), function () {
            $(".work .row .design").fadeIn("fast");
        };
        $(".work .row .photo").fadeOut("fast"), function () {
            $(".work .row .design").fadeIn("fast");
        };
    })
    $('.codebtn').on('click', function () {
        $(".work .row .design").fadeOut("fast"), function () {
            $(".work .row .code").fadeIn("fast");
        };
        $(".work .row .app").fadeOut("fast"), function () {
            $(".work .row .code").fadeIn("fast");
        };
        $(".work .row .photo").fadeOut("fast"), function () {
            $(".work .row .code").fadeIn("fast");
        };
    })
    $('.photobtn').on('click', function () {
        $(".work .row .design").fadeOut("fast", function () {
            $(".work .row .photo").fadeIn("fast")
        });
        $(".work .row .code").fadeOut("fast", function () {
            $(".work .row .photo").fadeIn("fast");
        });
        $(".work .row .app").fadeOut("fast", function () {
            $(".work .row .photo").fadeIn("fast");
        });
    })
    $('.appbtn').on('click', function () {
        $(".work .row .design").fadeOut("fast", function () {
            $(".work .row .app").fadeIn("fast")
        });
        $(".work .row .code").fadeOut("fast", function () {
            $(".work .row .app").fadeIn("fast");
        });
        $(".work .row .photo").fadeOut("fast", function () {
            $(".work .row .app").fadeIn("fast");
        });
    })
    $('.work ul .allbtn').on('click', function () {
        $(".work .row .design").fadeIn("fast");
        $(".work .row .code").fadeIn("fast");
        $(".work .row .app").fadeIn("fast");
        $(".work .row .photo").fadeIn("fast");
    });
});
    