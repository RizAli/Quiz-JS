function print(message) {
  document.write(message);
}

var questions= [
  ['question 1', 'answer 1'],
  ['question 2', 'answer 2'],
  ['question 3', 'answer 3'],
  ['question 4', 'answer 4']
];

for (i=0; i<questions.length; i+=1) {
  alert(questions[i]);
}
