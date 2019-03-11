var questions = [{
    ques: "A variable speed motor-driven centrifugal pump is operating at 50% speed in an open system. If the pump speed is increased to 100%, available net positive suction head (NPSH) will ________ and required NPSH will _________.",
    ans: ["increase; remain the same", "increase; increase", "decrease; remain the same", "decrease; increase"],
    name: "zero",
    correct: "decrease; increase",
    divClass: ".zero"
},
{
    ques: "The flow rate of a fluid passing through a venturi can be determined by measuring the:",
    ans: ["linear displacement of a metering plug installed in the throat of the venturi.", "change in the velocity of the fluid as it passes through the venturi.", "rotation of a paddle wheel type device installed in the throat of the venturi.", "differential pressure of the fluid as it passes through the venturi."],
    name: "one",
    correct: "differential pressure of the fluid as it passes through the venturi.",
    divClass: ".one"
},
{
    ques: "A motor-driven centrifugal pump is operating in an open system with its discharge valve throttled to 50% open. If the discharge valve is fully opened, available net positive suction head (NPSH) will ___________ and required NPSH will ___________.",
    ans: ["remain the same; increase", "remain the same; remain the same", "decrease; increase", "none of the above"],
    name: "two",
    correct: "decrease; increase",
    divClass: ".two"
},
{
    ques: "Which one of the following describes the function and use of the backseat on a manual valve? ",
    ans: ["Removes pressure from the packing. Typically used to iso. the stuffing box for valve repacking.", "Adds pressure to the packing. Typically used when needed to add water to other systems", "Removes pressure from the packing. Typically used when needed to isolate packing leakage.", "Is a backup for primary seat leaks. Typically used to prevent the primary seat from leaking."],
    name: "three",
    correct: "Removes pressure from the packing. Typically used when needed to isolate packing leakage.",
    divClass: ".three"
},
{
    ques: "The rate of heat transfer between two liquids in a heat exchanger will be decreased if the: (Assume single-phase conditions and a constant specific heat capacity.) ",
    ans: ["flow rate of the colder liquid is decreased by 10%.", "temperature of both liquids is increased by 20°F.", "temperature of both liquids is decreased by 20°F.", "low rate of the hotter liquid is increased by 10%."],
    name: "four",
    correct: "flow rate of the colder liquid is decreased by 10%.",
    divClass: ".four"
},
{
    ques: "The pressure gauge on a main condenser reads 2 psiv. What is the approximate absolute pressure in the main condenser? ",
    ans: ["15 psia", "2 psia", "13 psia", "17 psia"],
    name: "five",
    correct: "13 psia",
    divClass: ".five"
},
{
    ques: "What unit of measurement is used to describe the rate of electron flow? ",
    ans: ["Volt", "Ampere", "Ohm", "Volt-amp reactive (VAR)"],
    name: "six",
    correct: "Ampere",
    divClass: ".six"
},
{
    ques: "Which one of the following terms is used to describe the delay between a process parameter change and the sensing of that change by the process controller? ",
    ans: ["Gain", "Dead time", "Offset", "Time constant"],
    name: "seven",
    correct: "Dead time",
    divClass: ".seven"
},
{
    ques: "Which one of the following describes a characteristic of pneumatic valve positioners?",
    ans: ["They can provide automatic and manual demand signals to pneumatic controllers<br> and valve actuators.", "They can either supply or receive air to/from pneumatic controllers, depending on the<br>  direction of valve travel.", "They can increase or decrease air pressure to valve actuators to obtain <br> the proper valve response.", "They can increase air pressure to valve actuators above <br>  existing main air header pressure."],
    name: "eight",
    correct: "They can increase or decrease air pressure to valve actuators to obtain the proper valve response.",
    divClass: ".eight"
},
{
    ques: "How will a typical motor-operated valve respond to a loss of electrical power to the valve actuator? ",
    ans: ["Open fully", "Close fully", "Move to 50% open", "Remain as is"],
    name: "nine",
    correct: "Remain as is",
    divClass: ".nine"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions

$("#start-btn").on('click', start)

//$(document).on("click", "#restart", restart);

function start(){
    $(this).parent().hide();
    countdown(70);
    questionDisplay();
    };

//function restart(){
//    $('.subs1').remove();
//    $('.subs').show();
//    countdown(70);
//    questionDisplay();
//    };



// function for displaying questions
var questionDisplay = function() {
$('.container').show();
$('.qsss').css( "padding", "7px" );
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.subs').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    var ans = $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '" class="p-2"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label><br>');
        ans.addClass("p-2")
}
$('.subs').prepend('<hr />');
}
var button = $("<button>");
button.text("Submit")
button.addClass("btn btn-primary black-background white ");
button.attr('id', 'sub-but');
$(".subs").append(button);
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    alert("Times Up")
    clearTimer()
    grades()
}
}, 1000);

// click event for submit button to stop timer
$(document).on("click", "#sub-but", clearTimer);

function clearTimer() {
clearInterval(timer);
}
}; // end countdown




// function to grade quiz once submit button is clicked
var gradeQuiz = $(document).on("click", "#sub-but", grades);

function grades() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else if ($('input:radio[name="' + questions[i].name + '"]:checked').val()){
    wrongAnswers++;
};
};

unAnswered = 10 - correctAnswers - wrongAnswers;

console.log(correctAnswers);
console.log(wrongAnswers);


// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.qsss').css( "padding", "0px" );
$('.lee').remove();

// show answerScreen

// display correctAnswers
var rights = $("<h2>").text("Correct Answers: " + correctAnswers);
$('.subs1').append(rights);

// display wrongAnswers
var wrongs = $("<h2>").text("Wrong Answers: " + wrongAnswers);
$('.subs1').append(wrongs);
// display unAns
var unAs = $("<h2>").text("Unanswered: " + unAnswered);
$('.subs1').append(unAs);

var restart = $("<h1>");
restart.text("Results:")

restart.attr('id', 'restart');
$(".subs1").prepend(restart);


}; // end gradeQuiz

