
$(document).ready(function() {
  var q1 = {
    question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
    choices: ["document.location='http://www.newlocation.com'", "browser.location='http://www.newlocation.com'", "navigator.location='http://www.newlocation.com'", "window.location='http://www.newlocation.com'"],
  };

  var q2 = {
    question: "Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browser's locale settings.?",
    choices: ["toExponential()", "toFixed()", "toString()", "toLocaleString()"],
  };

  var q3 = {
    question: "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
    choices: ["substr()", "search()", "lastIndexOf()", "indexOf()"],
  };

  var q4 = {
    question: "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
    choices: ["toLowerCase()", "toString()", "substring()", "toLocaleLowerCase()"],
  };

  var q5 = {
    question: "Which of the following function of Array object represents the source code of an object?",
    choices: ["unshift()", "toString()", "splice()", "toSource()"],
  };

  var counter = 0;
  var timeLeft = 15;
  var timeLeftt = 5;
  var set;
  var sett;
  var correctCounter = 0;
  var incorrectCounter = 0;
  var noAnswerCounter = 0;

  function initiateQuestion() {
    $("#startbtn").replaceWith("");
    $("#start").text("");
    if (counter === 0) {
      $("#start").append("<h2 class='questions'>" + q1.question + "</h2>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q1.choices[0] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q1.choices[1] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q1.choices[2] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary correct choice'>"+ q1.choices[3] + "</button>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    }
    else if (counter === 1) {
      $("#start").append("<h2 class='questions'>" + q2.question + "</h2>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q2.choices[0] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q2.choices[1] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q2.choices[2] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary correct choice'>"+ q2.choices[3] + "</button>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    } else if (counter === 2) {
      $("#start").append("<h2 class='questions'>" + q3.question + "</h2>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q3.choices[0] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q3.choices[1] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q3.choices[2] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary correct choice'>"+ q3.choices[3] + "</button>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    } else if (counter === 3) {
      $("#start").append("<h2 class='questions'>" + q4.question + "</h2>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q4.choices[0] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q4.choices[1] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q4.choices[2] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary correct choice'>"+ q4.choices[3] + "</button>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);
      counter++;

    } else if (counter === 4) {
      debugger;
      $("#start").append("<h2 class='questions'>" + q5.question + "</h2>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q5.choices[0] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q5.choices[1] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary incorrect choice'>"+ q5.choices[2] + "</button>" + "</br>" +
      "<button type='button' class='btn btn-primary correct choice'>"+ q5.choices[3] + "</button>");
      $("#timer").text("Time Remaining: 30 Seconds");
      set = setInterval(countdown, 1000);

    }
    else {
      clearInterval(set);
      clearInterval(sett);
      timeLeft = 0;
      timeLeftt = 0;
      $("#start").html("<h2>Results</h2>");
      $("#timer").html("<div>Correct Questions: " + correctCounter + "</div>");
      $("#timer").append("<div>Incorrect Questions: " + incorrectCounter + "</div>");
      $("#timer").append("<div>Not Answered Questions: " + noAnswerCounter + "</div>");
    }
  };

  function results() {
      clearInterval(set);
      $("#start").html("<h2>Results</h2>");
      $("#timer").html("<div>Correct Questions: " + correctCounter + "</div>");
      $("#timer").append("<div>Incorrect Questions: " + incorrectCounter + "</div>");
      $("#timer").append("<div>Not Answered Questions: " + noAnswerCounter + "</div>");
      if(counter<=4){
      sett = setInterval(countdown2, 1000);
      } else {
      clearInterval(set);
      clearInterval(sett);
      timeLeft = 0;
      timeLeftt = 0;
    }
  };

  function countdown() {
    clearInterval(sett)
    $(".correct").on("click", timeCorrect);
    $(".incorrect").on("click", timeIncorrect);
    if (timeLeft === 0) {
      noAnswerCounter++;
      results();
      timeLeft = 15;
    } else {
      $("#timer").text("Time Remaining: " + timeLeft + " Seconds");
      timeLeft--;
    }
  };

  function countdown2() {
    if (timeLeftt === 0) {
      initiateQuestion();
      timeLeftt = 5;
      clearInterval(sett)
    } else {
      timeLeftt--;
    }
  };

  function timeCorrect() {
    correctCounter++;
    clearInterval(set);
    clearInterval(sett);
    timeLeft = 15;
    $("#start").html("<h2>Correct!</h2>");
    $("#timer").text("");
    if(counter<=4){
    sett = setInterval(countdown2, 1000);
    } else {
    clearInterval(set);
    clearInterval(sett);
    timeLeft = 0;
    timeLeftt = 0;
    }

  };

  function timeIncorrect() {
    incorrectCounter++;
    clearInterval(set);
    clearInterval(sett);
    timeLeft = 15;
    $("#start").html("<h2>Incorrect!</h2>");
    $("#timer").text("");
    if(counter<=4){
    sett = setInterval(countdown2, 1000);
    } else {
    clearInterval(set);
    clearInterval(sett);
    timeLeft = 0;
    timeLeftt = 0;
    }
  };

  $("#startbtn").on("click", initiateQuestion);


});
