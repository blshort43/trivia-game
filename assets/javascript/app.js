var count = 10;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 3;
var audio3 = $("#mysoundclip3")[0];
var audio4 = $("#mysoundclip4")[0];
var audio5 = $("#mysoundclip5")[0];


window.onload = function() {
        $(".question1, .question2, .question3, .timerH, .correct, .incorrect, .blank").hide();
        var blank = $('input:radio:not(:checked)').length;
        audio3.play();

    }
    //show setInterval on page
$(".btn").click(function() {
    $(".btn").remove();
    $(".question1, .question2, .question3, .timerH").show();
    $('input').change(function() {
        var right = $('.right:checked').length;
        var wrong = $('.wrong:checked').length;
        var blank = $('input:radio:not(:checked)').length;

        unanswered = (blank - 9);
        correctAnswers = (right);
        incorrectAnswers = (wrong);

    });


    timer = setInterval(function() {
        $(".timerH").html("Time Remaining: " + count-- + " seconds");
        if (count === -1) clearInterval(timer);
        if (count === 5) {
            audio4.play();
        };
        if (count === -1) {
            audio5.play();
            $(".question1, .question2, .question3").hide();
            $(".timerH").html("Times up!")
            $(".correct").append("Correct Answers: " + correctAnswers);
            $(".incorrect").append("Incorrect Answers: " + incorrectAnswers);
            $(".blank").append("Unanswered: " + unanswered);
            $(".correct, .incorrect, .blank").show();
        }
    }, 1000);
});


var audio = $("#mysoundclip")[0];

$("input").click(function() {
    audio.currentTime = 0;
    audio.play();
});

var audio2 = $("#mysoundclip2")[0];

$(".btn").click(function() {
    audio2.currentTime = 0;
    audio2.play();
});
