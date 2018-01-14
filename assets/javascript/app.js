$(document).ready(function() {

  var q1 = {
    question: "Question 1",
    choices: ["choice1", "choice2", "choice3", "correct 1"],
    correct: "Correct 1"
  };

  var q2 = {
    question: "Question 2",
    choices: ["choice1", "choice2", "choice3", "correct 2"],
    correct: "Correct 2"
  };

  var q3 = {
    question: "Question 3",
    choices: ["choice1", "choice2", "choice3", "correct 3"],
    correct: "Correct 3"
  };

  var q4 = {
    question: "Question 4",
    choices: ["choice1", "choice2", "choice3", "correct 4"],
    correct: "Correct 4"
  };

  var q5 = {
    question: "Question 5",
    choices: ["choice1", "choice2", "choice3", "correct 5"],
    correct: "Correct 5"
  };

  var counter = 0;
  var timeLeft = 30;
  var elem = $("#timer");

  $("#startbtn").on("click", initiateQuestion);

  function countdown() {
    if (timeLeft === 0) {
      clearTimeout(30);
      counter++;
      initiateQuestion();
      console.log("it worked")
    } else {
      elem.text("Time Remaining: " + timeLeft + " Seconds");
      timeLeft--;
    }
  };

  function initiateQuestion() {

    // countdown();
    setInterval(countdown, 1000);

    if (counter === 0) {
      $("#start").append("<div class='questions'>" + q1.question + "</div>");
      $("#start").append("<div class='choices'>" + q1.choices[0] + "</div>");
      $("#start").append("<div class='choices'>" + q1.choices[1] + "</div>");
      $("#start").append("<div class='choices'>" + q1.choices[2] + "</div>");
      $("#start").append("<div class='choices'>" + q1.choices[3] + "</div>");
      counter++;
    } else if (counter === 1) {
      $("#start").append("<div class='questions'>" + q2.question + "</div>");
      $("#start").append("<div class='choices'>" + q2.choices[0] + "</div>");
      $("#start").append("<div class='choices'>" + q2.choices[1] + "</div>");
      $("#start").append("<div class='choices'>" + q2.choices[2] + "</div>");
      $("#start").append("<div class='choices'>" + q2.choices[3] + "</div>");
      counter++;
    } else if (counter === 2) {
      $("#start").append("<div class='questions'>" + q3.question + "</div>");
      $("#start").append("<div class='choices'>" + q3.choices[0] + "</div>");
      $("#start").append("<div class='choices'>" + q3.choices[1] + "</div>");
      $("#start").append("<div class='choices'>" + q3.choices[2] + "</div>");
      $("#start").append("<div class='choices'>" + q3.choices[3] + "</div>");
      counter++;
    } else if (counter === 3) {
      $("#start").append("<div class='questions'>" + q4.question + "</div>");
      $("#start").append("<div class='choices'>" + q4.choices[0] + "</div>");
      $("#start").append("<div class='choices'>" + q4.choices[1] + "</div>");
      $("#start").append("<div class='choices'>" + q4.choices[2] + "</div>");
      $("#start").append("<div class='choices'>" + q4.choices[3] + "</div>");
      counter++;
    } else if (counter === 4) {
      $("#start").append("<div class='questions'>" + q5.question + "</div>");
      $("#start").append("<div class='choices'>" + q5.choices[0] + "</div>");
      $("#start").append("<div class='choices'>" + q5.choices[1] + "</div>");
      $("#start").append("<div class='choices'>" + q5.choices[2] + "</div>");
      $("#start").append("<div class='choices'>" + q5.choices[3] + "</div>");
      counter++;
    }
  }
});
