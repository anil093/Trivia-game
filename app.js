var tquestions = [{
    question: "In what year was Pixar founded?",
	answerList: ["1979", "1986", "1995", "2000"],
	answer: 1
},

{
  question: "Which tech mogul provided funding and became a co-founder of Pixar?",
  answerList: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
  answer: 0},
  {
    question: "Which tech mogul provided funding and became a co-founder of Pixar?",
    answerList: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
    answer: 0}
 
];


 
var answered;
var userSelect;
var seconds;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var currentQuestion = 0;

var messages = {
                    correct: "You won!, congrats",
                    incorrect: "no, that's not correct",
                    endtime: "you ran out of the time",
                    finished: "Lets see how you did"
               };

 /* $('#startBtn').on('click', function()
        {
            $(this).hide();
            newGame();
        }); */


        /*    function newGame(){
                $('#finalMessage').empty();
                $('#correctAnswers').empty();
                $('#incorrectAnswers').empty();
                $('#unanswered').empty();
                currentQuestion = 0;
                correctAnswer = 0;
                incorrectAnswer = 0;
                unanswered = 0;
                Questionnumber();
            } */


        // diplaying question number and answerlist 
        function Questionnumber()
        {
           
                  
                   $("#currentQuestion").html('<h3> Question #' + (currentQuestion) + '/' + tquestions.length + '</h3>');
                   $(".question").html('<h3>' +  tquestions[currentQuestion].question + '</h3>');
       
                   for(i = 0; i<4; i++)
                   {
       
                       var answers = $('<div>');
                       answers.text(tquestions[currentQuestion].answerList[i]);
                       answers.attr({'data-id' : i});
                       answers.addClass("select");
                       $('.answerList').append(answers);
                   }

                   countDown();
                   currentQuestion++;
                   
                   $(".select").on("click", function()
                   {
                          
                          userSelect = $(this).data('id');
                          console.log(userSelect);
                          clearInterval(time);
                          answered = true;
                          correctAnswer();
                          
                         
                         
                   });
                
                
       
        };
        
        Questionnumber();

       
       

      function reset()
           {
            $('#Time-Left').empty();
            $("#currentQuestion").empty();
            $(".question").empty();
            clearInterval(time);
            answered = false;
            $('.answerList').empty();
            $("#message").empty();
            $("#correctAnswer").empty();
            userSelect = " ";



           } ;


 function countDown()
      
           {
                seconds = 10;
                $("#Time-left").html('<h3> Time Remaining : ' + seconds + '</h3>');
                answered = true;
                time = setInterval(showCountDown, 1000);
              

           }
          
           function showCountDown()
           {
                  seconds--;
                  $("#Time-left").html('<h3> Time Remaining : ' + seconds + '</h3>');
                  if(seconds < 1)
                  {
                  clearInterval(time);
                  answered = false;
                  
                 }
            };
          
      
       
       




       function correctAnswer()
        {   
                        
                        var rightAnswerText = tquestions[currentQuestion].answerList[tquestions[currentQuestion].answer];
                        var rightAnswerid = tquestions[currentQuestion].answer;
                        console.log(rightAnswerid);
                        console.log(rightAnswerText);
                    

                        if ((userSelect == rightAnswerid)  && (answered == true))
                        {
                            
                            correctAnswer++;
                            $('#message').html(messages.correct);
                            
                        }
                        else if((userSelect != rightAnswerid)  && (answered == true))
                        {
                            incorrectAnswer++;
                            $("#message").html(messages.incorrect);
                            $("#correctAnswer").html('the correct answer is :' + rightAnswerText);
                        }
                       else{
                            unanswered++;
                            $("#message").html(messages.endtime);
                            $("#correctAnswer").html('the correct answer is :' + rightAnswerText);
                            answered = true;
                        }  
                        reset();
                        Questionnumber();
                    } ;
                

                
                   

                        
                    /*    if(currentQuestion == (tquestions.length-1))
                       {
		                   setTimeout(scoreboard, 5000)
                        
                       }
                        else
                        {
                            currentQuestion++;
                            setTimeout(Questionnumber, 5000);
                        } */
        
    
    

            function scorecard()
                    {

                        $('#timeLeft').empty();
                        $('#message').empty();
                        $('#correctedAnswer').empty();
                        $('#finalMessage').html(messages.finished);
                        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
                        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
                        $('#unanswered').html("Unanswered: " + unanswered);
                        $('#startOverBtn').addClass('reset');
                        $('#startOverBtn').show();
                        $('#startOverBtn').html('Start Over?');

                    };    
       
                


