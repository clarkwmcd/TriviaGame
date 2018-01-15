$(document).ready(function() {
  var q1 = {
    question: "Question 1",
    choices: ["choice1", "choice2", "choice3", "correct 1"],
    correct: "correct 1"
  };

  var q2 = {
    question: "Question 2",
    choices: ["choice1", "choice2", "choice3", "correct 2"],
    correct: "correct 2"
  };

  var q3 = {
    question: "Question 3",
    choices: ["choice1", "choice2", "choice3", "correct 3"],
    correct: "correct 3"
  };

  var q4 = {
    question: "Question 4",
    choices: ["choice1", "choice2", "choice3", "correct 4"],
    correct: "correct 4"
  };

  var q5 = {
    question: "Question 5",
    choices: ["choice1", "choice2", "choice3", "correct 5"],
    correct: "correct 5"
  };

  var counter = 0;
  var timeLeft = 5;
  var elem = $("#timer");
  var set;

  var correctAnswers = 0;

  function countdown() {

    if (timeLeft === 0) {
      clearInterval(set);
      results();
    } else {
      elem.text("Time Remaining: " + timeLeft + " Seconds");
      timeLeft--;
    }
  };

  function initiateQuestions() {
      set = setInterval(countdown, 1000);
      $("#start").append("<div class='questions'>" + q1.question + "</div>");
      $("#start").append("<input type='radio' name='q1'> " + q1.choices[0] + "<br>");
      $("#start").append("<input type='radio' name='q1'> " + q1.choices[1] + "<br>");
      $("#start").append("<input type='radio' name='q1'> " + q1.choices[2] + "<br>");
      $("#start").append("<input id='correct1' type='radio' name='q1' value='correct1'> " + q1.choices[3] + "<br>");
      $("#start").append("<br>");

      $("#start").append("<div class='questions'>" + q2.question + "</div>");
      $("#start").append("<input type='radio' name='q2'> " + q2.choices[0] + "<br>");
      $("#start").append("<input type='radio' name='q2'> " + q2.choices[1] + "<br>");
      $("#start").append("<input id='correct2' type='radio' name='q2'> " + q2.choices[2] + "<br>");
      $("#start").append("<input type='radio' name='q2'> " + q2.choices[3] + "<br>");
      $("#start").append("<br>");

      $("#start").append("<div class='questions'>" + q3.question + "</div>");
      $("#start").append("<input type='radio' name='q3'> " + q3.choices[0] + "<br>");
      $("#start").append("<input type='radio' name='q3'> " + q3.choices[1] + "<br>");
      $("#start").append("<input type='radio' name='q3'> " + q3.choices[2] + "<br>");
      $("#start").append("<input id='correct3' type='radio' name='q3'> " + q3.choices[3] + "<br>");
      $("#start").append("<br>");

      $("#start").append("<div class='questions'>" + q4.question + "</div>");
      $("#start").append("<input type='radio' name='q4'> " + q4.choices[0] + "<br>");
      $("#start").append("<input type='radio' name='q4'> " + q4.choices[1] + "<br>");
      $("#start").append("<input type='radio' name='q4'> " + q4.choices[2] + "<br>");
      $("#start").append("<input id='correct4' type='radio' name='q4'> " + q4.choices[3] + "<br>");
      $("#start").append("<br>");

      $("#start").append("<div class='questions'>" + q5.question + "</div>");
      $("#start").append("<input id='correct5' type='radio' name='q5'> " + q5.choices[0] + "<br>");
      $("#start").append("<input type='radio' name='q5'> " + q5.choices[1] + "<br>");
      $("#start").append("<input type='radio' name='q5'> " + q5.choices[2] + "<br>");
      $("#start").append("<input type='radio' name='q5'> " + q5.choices[3] + "<br>");

  };



  function results() {
    $("#start").text("results");
    var correct = $("#correct1");


    if(correct.checked == false) {
      console.log('correct')
    }
    else {
      console.log('false')
    }
  };


  $("#startbtn").on("click", initiateQuestions);



});








// $(document).ready(function() {
//
// var triviaContent = {
//   questions: ["question0","question1","question2","question3","question4"],
//   choices: [{"choice01","choice02","choice03","choice04"},{"asdf"}],,["choice11","choice12","choice13","choice14"],["choice21","choice22","choice23","choice24"],["choice21","choice32","choice33","choice34"],["choice41","choice42","choice43","choice44"]
//   correct: ["correct0","correct1","correct2","correct3","correct4"]
// };
//
// console.log(triviaContent.questions[0]+triviaContent.choices[0]+triviaContent.correct[0]);
//
// });






// $(document).ready(function() {
//   var q1 = {
//     question: "Question 1",
//     choices: ["choice1", "choice2", "choice3", "correct 1"],
//     correct: "correct 1"
//   };
//
//   var q2 = {
//     question: "Question 2",
//     choices: ["choice1", "choice2", "choice3", "correct 2"],
//     correct: "correct 2"
//   };
//
//   var q3 = {
//     question: "Question 3",
//     choices: ["choice1", "choice2", "choice3", "correct 3"],
//     correct: "correct 3"
//   };
//
//   var q4 = {
//     question: "Question 4",
//     choices: ["choice1", "choice2", "choice3", "correct 4"],
//     correct: "correct 4"
//   };
//
//   var q5 = {
//     question: "Question 5",
//     choices: ["choice1", "choice2", "choice3", "correct 5"],
//     correct: "correct 5"
//   };
//
//   var counter = 0;
//   var timeLeft = 5;
//   var elem = $("#timer");
//
//   function countdown() {
//     if (timeLeft === 0) {
//       clearTimeout(timeLeft=5);
//       counter++;
//     } else {
//       elem.text("Time Remaining: " + timeLeft + " Seconds");
//       timeLeft--;
//     }
//   };
//
//   function initiateQuestion() {
//     // setInterval(countdown, 1000);
//     if (counter === 0) {
//       $("#start").append("<div class='questions'>" + q1.question + "</div>");
//       $("#start").append("<div class='choices'>" + q1.choices[0] + "</div>");
//       $("#start").append("<div class='choices'>" + q1.choices[1] + "</div>");
//       $("#start").append("<div class='choices'>" + q1.choices[2] + "</div>");
//       $("#start").append("<div class='choices'>" + q1.choices[3] + "</div>");
//
//     }
//     else if (counter === 1) {
//       $("#start").append("<div class='questions'>" + q2.question + "</div>");
//       $("#start").append("<div class='choices'>" + q2.choices[0] + "</div>");
//       $("#start").append("<div class='choices'>" + q2.choices[1] + "</div>");
//       $("#start").append("<div class='choices'>" + q2.choices[2] + "</div>");
//       $("#start").append("<div class='choices'>" + q2.choices[3] + "</div>");
//
//     } else if (counter === 2) {
//       $("#start").append("<div class='questions'>" + q3.question + "</div>");
//       $("#start").append("<div class='choices'>" + q3.choices[0] + "</div>");
//       $("#start").append("<div class='choices'>" + q3.choices[1] + "</div>");
//       $("#start").append("<div class='choices'>" + q3.choices[2] + "</div>");
//       $("#start").append("<div class='choices'>" + q3.choices[3] + "</div>");
//
//     } else if (counter === 3) {
//       $("#start").append("<div class='questions'>" + q4.question + "</div>");
//       $("#start").append("<div class='choices'>" + q4.choices[0] + "</div>");
//       $("#start").append("<div class='choices'>" + q4.choices[1] + "</div>");
//       $("#start").append("<div class='choices'>" + q4.choices[2] + "</div>");
//       $("#start").append("<div class='choices'>" + q4.choices[3] + "</div>");
//
//     } else if (counter === 4) {
//       $("#start").append("<div class='questions'>" + q5.question + "</div>");
//       $("#start").append("<div class='choices'>" + q5.choices[0] + "</div>");
//       $("#start").append("<div class='choices'>" + q5.choices[1] + "</div>");
//       $("#start").append("<div class='choices'>" + q5.choices[2] + "</div>");
//       $("#start").append("<div class='choices'>" + q5.choices[3] + "</div>");
//
//     }
//   }
//
//
//
//
//     $("#startbtn").on("click", initiateQuestion);
//
//
// });
