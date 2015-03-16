var questions= [

  ['How many states are in the USA?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong =[];


for (i = 0; i<questions.length;  i=i+1){
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
}
