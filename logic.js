$("#start").on("click",function(){
    $("#start").remove();
    game.loadquestion();

});

$(document).on('click','.answer-button',function(e){
   game.clicked(e);
});

$(document).on('click','#reset', function(){
    game.reset();
})

var questions = [{
    question: "In what year was Pixar founded?",
	answerList: ["1979", "1986", "1995", "2000"],
	answer: 1979
},{
	question: "Which tech mogul provided funding and became a co-founder of Pixar?",
	answerList: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
	answer: "Steve Jobs"
},{
	question: "What was Pixar's first feature-length film that was released in 1995?",
	answerList: ["Toy Story", "A Bug's Life", "Monster's Inc", "Finding Nemo"],
	answer: "Toy Story"
},{
	question: "Who was the first Pixar character added to the Disney Princess line-up?",
	answerList: ["Jessie", "Repunzel", "Merida", "Elsa"],
	answer: "Repunzel"
 },
 {
	question: "What's the name of Pixar's first short film, also known as their mascot?",
	answerList: ["Lampo", "Junior", "Pixie", "Luxo Jr."],
	answer: "Pixie"
},{
	question: "How many sequels does Pixar currently have released? (as of August 2016)",
	answerList: ["5", "3", "6", "7"],
	answer: 5
},{
	question: "Which film won Pixar's first Academy Award for Best Animated Feature?",
	answerList: ["Toy Story", "Finding Nemo", "Up", "Wall-E"],
	answer: "Toy Story"
},{
	question: "Who directed Pixar's first three feature films?",
	answerList: ["Peter Docter", "Brad Bird", "John Lasseter", "Peter Sohn"],
	answer: "Brad Bird"
},{
	question: "Who voiced Sadness in 'Inside Out'?",
	answerList: ["Amy Poehler", "Phyllis Smith", "Mindy Kaling", "Phyllis Vance"],
	answer: "Phyllis Smith"
},{
	question: "Billy Crystal voices Mike Wazowski in 'Monster, Inc.' but what role did he originally turn down from Pixar?",
	answerList: ["Hopper", "Woody", "Marlin", "Buzz Lightyear"],
	answer: 3
},{
	question: "The voice of WALL-E, Ben Burtt, also voiced what other famous robot?",
	answerList: ["R2-D2", "Alpha 5", "C-3PO", "Astro Boy"],
	answer: "Marlin"
},{
	question: "Brad Bird directed which animated film prior to taking on 'The Incredibles'?",
	answerList: ["The Brave Little Toaster", "The Iron Giant", "Tarzan", "The Prince of Egypt"],
	answer: "The Iron Giant"
}
];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:10,
    correct:0,
    incorrect:0,
    unanswered:0,
   
    countdown: function(){
     game.counter--;
     $("#counter").html(game.counter);
     if(game.counter<=0){
         console.log("time up");
         game.timeUP();
     }
    },
    loadquestion: function(){
      timer = setInterval(game.countdown, 1000);
      $('#subwrapper').html("<h2> Time Remaining <span id='counter'>10</span> Seconds </h2>");
      $('#subwrapper').append("<h2>"+questions[game.currentQuestion].question+"</h2>");
    
      for(var i =0; i<questions[game.currentQuestion].answerList.length; i++){
        $("#subwrapper").append('<button type="button" class="answer-button" "btn btn-outline-primary"  id="button-'+i+'"data-name="'
                        +questions[game.currentQuestion].answerList[i]+'">'+questions[game.currentQuestion].answerList[i]+'</button>'    
        )}
    },
    nextQuestion: function(){
        game.counter = 10;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadquestion();

    },
    timeUP: function(){
      clearInterval(timer);
      game.unanswered++;
      $('#subwrapper').html('<h2> OUT OF TIME</h2>');
      $('#subwrapper').append('<h3> The Correct Answer was:' +questions[game.currentQuestion].answer+'</h3>');
      if(game.currentQuestion==questions.length-1){
        setTimeout(game.results, 3*1000);
    }
    else{
        setTimeout(game.nextQuestion, 3*1000);
    }
    },
    results: function(){
       clearInterval(timer);
        $('#subwrapper').html("<h2> ALL DONE! </h2>");
        $('#subwrapper').append('<h2> Correct:'  +game.correct +'</h2>');
        $('#subwrapper').append('<h2> Incorrect:'  +game.incorrect +'</h2');
        $('#subwrapper').append('<h2> unanswered: ' + game.unanswered + '</h2');
        $('#subwrapper').append('<button id="reset">RESET</button>')
    },

    clicked: function(e){
          clearInterval(timer);
          if($(e.target).data("name")==questions[game.currentQuestion].answer){
              game.answeredCorrectly();
          }
          else{
              game.answeredIncorrectly();
          }
    },
    answeredCorrectly: function(){
        console.log("you got it");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> You got it right!</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000);
        }
        else{
            setTimeout(game.nextQuestion, 3*1000);
        }
        
    },
    answeredIncorrectly: function(){
        console.log("you got it wrong");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2> You got it Wrong!</h2>');
        $('#subwrapper').append('<h3> The Correct Answer was:' +questions[game.currentQuestion].answer+'</h3>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000);
        }
        else{
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    reset:function(){
        game.currentQuestion =0;
        game.counter =0;
        game.correct =0;
        game.incorrect = 0;
        game.unanswered =0;
        game.loadquestion();

    }

}