var questions= [
  {
    question: 'How many states are in the USA?',
    answer: 50
  },
  {
    question: 'How many continents are there?',
    answer: 7
  },
  {
    question:'How many legs does an insect have?',
    answer: 6
  }
];

var correctAnswers = 0;
var questions;
var answer;
var response;
var html;
var correct = [];
var wrong =[];

function print(message) {
  var outputDiv = document.getElementById('output');  //DOM object
  outputDiv.innerHTML = message;
}

function buildlist(arr) {
  var listHTML = '<ol>';
   for (var i=0; i <arr.length; i +=1) {
    listHTML += '<li>' + arr[i] + '</li>';
   }
listHTML += '</ol>';
    return listHTML;
}



for (var i=0; i <questions.length; i+=1) {
question = questions[i].question;
answer = questions[i].answer;
response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers +=1;
    correct.push(question);
  }  else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2> You got these questions correct: </h2>';
html += buildlist(correct);
html += '<h2> You got these questions worng: </h2>';
html += buildlist(wrong);
print(html);

