$(".eye.left").hover(
    function () {
        $('.eye.left').children('.reflection').css("display", "none").siblings(".winkCover").css("display", "block").children(".wink").css("display", "block")
    },
    function () {
        $('.eye.left').children('.reflection').css("display", "block").siblings(".winkCover").css("display", "none").children(".wink").css("display", "none");
    }
)
$(".eye.right").hover(
    function () {
        $('.eye.right').children('.reflection').css("display", "none").siblings(".winkCover").css("display", "block").children(".wink").css("display", "block")
    },
    function () {
        $('.eye.right').children('.reflection').css("display", "block").siblings(".winkCover").css("display", "none").children(".wink").css("display", "none");
    }
)