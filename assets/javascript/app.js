// $(document).ready(function() {
//
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
//   var set;
//
//   var correctAnswers = 0;
//
//   function countdown() {
//
//     if (timeLeft === 0) {
//       clearInterval(set);
//       results();
//     } else {
//       elem.text("Time Remaining: " + timeLeft + " Seconds");
//       timeLeft--;
//     }
//   };
//
//   function initiateQuestions() {
//       set = setInterval(countdown, 1000);
//       $("#start").append("<div class='questions'>" + q1.question + "</div>");
//       $("#start").append("<input type='radio' name='q1'> " + q1.choices[0] + "<br>");
//       $("#start").append("<input type='radio' name='q1'> " + q1.choices[1] + "<br>");
//       $("#start").append("<input type='radio' name='q1'> " + q1.choices[2] + "<br>");
//       $("#start").append("<input id='correct1' type='radio' name='q1'> " + q1.choices[3] + "<br>");
//       $("#start").append("<br>");
//
//       $("#start").append("<div class='questions'>" + q2.question + "</div>");
//       $("#start").append("<input type='radio' name='q2'> " + q2.choices[0] + "<br>");
//       $("#start").append("<input type='radio' name='q2'> " + q2.choices[1] + "<br>");
//       $("#start").append("<input id='correct2' type='radio' name='q2'> " + q2.choices[2] + "<br>");
//       $("#start").append("<input type='radio' name='q2'> " + q2.choices[3] + "<br>");
//       $("#start").append("<br>");
//
//       $("#start").append("<div class='questions'>" + q3.question + "</div>");
//       $("#start").append("<input type='radio' name='q3'> " + q3.choices[0] + "<br>");
//       $("#start").append("<input type='radio' name='q3'> " + q3.choices[1] + "<br>");
//       $("#start").append("<input type='radio' name='q3'> " + q3.choices[2] + "<br>");
//       $("#start").append("<input id='correct3' type='radio' name='q3'> " + q3.choices[3] + "<br>");
//       $("#start").append("<br>");
//
//       $("#start").append("<div class='questions'>" + q4.question + "</div>");
//       $("#start").append("<input type='radio' name='q4'> " + q4.choices[0] + "<br>");
//       $("#start").append("<input type='radio' name='q4'> " + q4.choices[1] + "<br>");
//       $("#start").append("<input type='radio' name='q4'> " + q4.choices[2] + "<br>");
//       $("#start").append("<input id='correct4' type='radio' name='q4'> " + q4.choices[3] + "<br>");
//       $("#start").append("<br>");
//
//       $("#start").append("<div class='questions'>" + q5.question + "</div>");
//       $("#start").append("<input id='correct5' type='radio' name='q5'> " + q5.choices[0] + "<br>");
//       $("#start").append("<input type='radio' name='q5'> " + q5.choices[1] + "<br>");
//       $("#start").append("<input type='radio' name='q5'> " + q5.choices[2] + "<br>");
//       $("#start").append("<input type='radio' name='q5'> " + q5.choices[3] + "<br>");
//
//
//   };
//
// console.log($('input[id=correct1]:checked').val());
//
//   function results() {
//
//     $("#start").text("results");
//
//     if($('input[id=correct1]:checked').val() === true) {
//       $("#start").append("<p>You got question 1 correct</p>")
//     }
//     else {
//       $("#start").append("<p>You got question 1 incorrect</p>")
//     }
//
//     if($("#correct2").prop("checked", true)) {
//       $("#start").append("<p>You got question 2 correct</p>")
//     }
//     else {
//       $("#start").append("<p>You got question 2 incorrect</p>")
//     }
//
//     if($("#correct3").prop("checked", true)) {
//       $("#start").append("<p>You got question 3 correct</p>")
//     }
//     else {
//       $("#start").append("<p>You got question 3 incorrect</p>")
//     }
//
//     if($("#correct4").prop("checked", true)) {
//       $("#start").append("<p>You got question 4 correct</p>")
//     }
//     else {
//       $("#start").append("<p>You got question 4 incorrect</p>")
//     }
//
//     if($("#correct5").prop("checked", true)) {
//       $("#start").append("<p>You got question 5 correct</p>")
//     }
//     else {
//       $("#start").append("<p>You got question 5 incorrect</p>")
//     }
//   };
//
//   $("#startbtn").on("click", initiateQuestions);
//
// });













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
  var timeLeftt = 5;
  var set;
  var sett;
  var correctCounter = 0;
  var incorrectCounter = 0;

  function initiateQuestion() {
    $("#startbtn").replaceWith("");
    $("#start").text("");
    if (counter === 0) {
      clearInterval(sett);
      $("#start").append("<div class='questions'>" + q1.question + "</div>" +
      "<div class='incorrect choice'>" + q1.choices[0] + "</div>" +
      "<div class='incorrect choice'>" + q1.choices[1] + "</div>" +
      "<div class='incorrect choice'>" + q1.choices[2] + "</div>" +
      "<div class='correct choice'>" + q1.choices[3] + "</div>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    }
    else if (counter === 1) {
      clearInterval(sett);
      $("#start").append("<div class='questions'>" + q2.question + "</div>" +
      "<div class='incorrect choice'>" + q2.choices[0] + "</div>" +
      "<div class='incorrect choice'>" + q2.choices[1] + "</div>" +
      "<div class='incorrect choice'>" + q2.choices[2] + "</div>" +
      "<div class='correct choice'>" + q2.choices[3] + "</div>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    } else if (counter === 2) {
      clearInterval(sett);
      $("#start").append("<div class='questions'>" + q3.question + "</div>" +
      "<div class='incorrect choice'>" + q3.choices[0] + "</div>" +
      "<div class='incorrect choice'>" + q3.choices[1] + "</div>" +
      "<div class='incorrect choice'>" + q3.choices[2] + "</div>" +
      "<div class='correct choice'>" + q3.choices[3] + "</div>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    } else if (counter === 3) {
      clearInterval(sett);
      $("#start").append("<div class='questions'>" + q4.question + "</div>" +
      "<div class='incorrect choice'>" + q4.choices[0] + "</div>" +
      "<div class='incorrect choice'>" + q4.choices[1] + "</div>" +
      "<div class='incorrect choice'>" + q4.choices[2] + "</div>" +
      "<div class='correct choice'>" + q4.choices[3] + "</div>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    } else if (counter === 4) {
      clearInterval(sett);
      $("#start").append("<div class='questions'>" + q5.question + "</div>" +
      "<div class='incorrect choice'>" + q5.choices[0] + "</div>" +
      "<div class='incorrect choice'>" + q5.choices[1] + "</div>" +
      "<div class='incorrect choice'>" + q5.choices[2] + "</div>" +
      "<div class='correct  choice'>" + q5.choices[3] + "</div>");
      $("#timer").text("Time Remaining: 30 Seconds");

    }
  };

  function results() {
      clearInterval(set);
      $("#start").text("results");
      $("#timer").text("Correct Questions: " + correctCounter + "    " + "Incorrect Questions: " + incorrectCounter);
      sett = setInterval(countdown2, 1000);
  };

  function countdown() {
    clearInterval(sett)
    $(".correct").on("click", timeCorrect);
    $(".incorrect").on("click", timeIncorrect);
    if (timeLeft === 0) {
      results();
      timeLeft = 5;
    } else {
      $("#timer").text("Time Remaining: " + timeLeft + " Seconds");
      timeLeft--;
    }
  };

  function countdown2() {
    if (timeLeftt === 0) {
      initiateQuestion();
      timeLeftt = 5;
    } else {
      console.log(timeLeftt);
      timeLeftt--;
    }
  };

  function timeCorrect() {
    debugger;
    clearInterval(set);
    correctCounter++;
    $("#start").text("Correct results");
    sett = setInterval(countdown2, 1000);

  };

  function timeIncorrect() {
    clearInterval(set);
    incorrectCounter++;
    $("#start").text("Incorrect results");
    sett = setInterval(countdown2, 1000);
  };

  $("#startbtn").on("click", initiateQuestion);

});
