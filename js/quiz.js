var questions= [

  ['How many states are in the USA?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correctAnswers = 0;
var wrongAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong =[];

var print = function(message){
  document.write(message);
};



for (i = 0; i<questions.length;  i=i+1){
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));

  if (response === answer) {
    correctAnswers +=1;
    correct.push(question);

  } else if (response !== answer){
    wrongAnswers +=1;
    wrong.push(question);

  }
}


html_correct = "<p> You got " + correctAnswers + " question(s) right </p>";
html_incorrect = "<p> You got " + wrongAnswers + " questions(s) wrong</p>";

html_correct_questions = "<p> You got the following question(s) correct</p>" + correct
html_wrong_responses = "<p> You got the following question(s) wrong </p>" + wrong

print(html_correct);
print(html_incorrect);
print(html_correct_questions);
print(html_wrong_responses);