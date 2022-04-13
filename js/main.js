
$(function () {
    $('.work li').on('click', function () {
        $(this).addClass("active rounded-pill").siblings().removeClass("active");

            if ($(this).data("class") === 'all') {
            $(".shuffle-imgs .col-md").show();
            } else {
            $(".shuffle-imgs .col-md").css("opacity", ".08");

            $($(this).data("class")).parent().css("opacity", 1);
        }
        });
});    
    