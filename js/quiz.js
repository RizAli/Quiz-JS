var questions= [
  { question: 'How many states are in the USA?', answer: 50},
  { question: "How many continents are there?", answer: 7},
  { question: "How many legs does an insect have?", answer: 6}
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

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i =0;  i<arr.length; i+=1){
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML+= '</ol>';
    return listHTML;
}


for (i = 0; i<questions.length;  i=i+1){
  question = questions[i].question;
  answer = questions[i].answer;
  response = parseInt(prompt(question));

  if (response === answer) {
    correctAnswers +=1;
    correct.push(question);

  } else if (response !== answer){
    wrongAnswers +=1;
    wrong.push(question);
  }
}


html = "<p> You got " + correctAnswers + " question(s) right.</p> "
html += "You got " + wrongAnswers + " question(s) wrong. "

html += '<h2> You got these questions correct: </h2>';
html += buildList(correct);


html += '<h2> You got these questions wrong: </h2>';
html += buildList(wrong);


print(html);