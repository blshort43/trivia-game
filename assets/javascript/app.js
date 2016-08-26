
var count = 3;
var correctAnswers = 0;
var incorrectAnswers =0;
var unanswered = 3;


window.onload = function(){
	$(".question1, .question2, .question3, .timerH").hide();
	    var blank = $('input:radio:not(:checked)').length;

}
//show setInterval on page
$(".btn").click(function() {
		$(".btn").remove();
		$(".question1, .question2, .question3, .timerH").show();


	    $('input').change(function(){
        var right = $('.right:checked').length;
        var wrong = $('.wrong:checked').length;
        var blank = $('input:radio:not(:checked)').length;

        unanswered = (blank - 9);
	    correctAnswers =(right);
        incorrectAnswers = (wrong);

		});
});

timer = setInterval(function() {
	$(".timerH").html("Time Remaining: " + count-- + " seconds");
    if(count === -1) clearInterval(timer);
    if (count === -1){
	$(".question1, .question2, .question3").hide();
	$(".timerH").html("Times up!")
    // $(".timerH").html("<p>"'correct '  + correctAnswers "</p>");
	// .append("incorrect " + incorrectAnswers)   
	// .append("blank " + unanswered);

	}
}, 1000);

