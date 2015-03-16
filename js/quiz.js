function print(message) {
  document.write(message);
}

var questions= [
  ['What is question 1?', 'question 1'],
  ['What is questions 2?', 'question 2'],
  ['What is question 3?', 'question 3'],
  ['What is question 4?', 'question 4']
];

correct_ans = 0;
incorrect_ans = 0;
correct_given_ans= [[]];
incorrect_given_ans = [[]];

for (i=0; i<questions.length; i+=1){
  user_ans = prompt(questions[i][0]);
  if (user_ans === questions[i][1]) {
    correct_given_ans.push(user_ans)
    // document.write('<p>' + correct_given_ans + '</p>');
    correct_ans += 1
    // document.write("------------------------");
    // document.write('correct:' + correct_ans);
  } else if (user_ans !== [i][1]) {
    incorrect_ans += 1
    incorrect_given_ans.push([i][0])
    document.write(incorrect_given_ans);
    incorrect_given_ans.push(user_ans);
    // document.write('incorrect:' + incorrect_ans);

  }
}
document.write('<p>' + 'You got the following questions correct:' + '<p>'+ correct_given_ans + '</p>' + '</p>');
document.write('<p>' + 'You got the following questions incorrect:' + '<p>'+ incorrect_given_ans + '</p>' + '</p>');

document.write('<p>' + 'You got  ' + correct_ans + '  correct'+ '</p>' );
document.write('<p>' + 'You got  ' + incorrect_ans + '  incorrect' + '</p>');
