import readline from 'readline-sync';
import chalk from 'chalk';


console.log(chalk.blue.bgBlack.bold('Welcome to the to GOT Quiz Game!'));
let userName = readline.question(chalk.blue('What is your name? '));
console.log(chalk.green.bold(`Hello ${userName.toLocaleUpperCase()}!`));

console.log(chalk.green.bold(`So here are the rules of the game:

1 There is a negative marking .
2 You can skip to answer(type X)
3 You Can skip Three continously in one go , if 
  skip the 4th the game will terminate.
4 ALL THE BEST!


Lets begin------------------------------`) );

console.log(chalk.yellow.bold('Let\'s start the game!'));




// an array of  object with questions , options and answers about the Game of Thrones


let questionsArrOfObj = [{
  question: 'Who is the author of the book "A Game of Thrones"?',
  options: ['George R.R. Martin', 'Gregory R. Martin'],
  answer: 'George R.R. Martin'
},
{
  question: 'What is the name of the sword that Lord Commander Mormont gives to Jon Snow?',
  options: ['Widow\'s Wail', 'Longclaw',],
  answer: 'Longclaw'
},
{
  question: 'What is the name of the main character in the book "A Game of Thrones"?',
  options: ['Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister'],
  answer: 'Tyrion Lannister'
},
{
  question: 'What were the Mad Kings last words?',
  options: ['fire and blood', 'burn the all', 'I am the King', 'let if fall'],
  answer: 'burn the all'
},
{
  question: 'What land does Lord Walder Frey demand be awarded for reconciling with the King in the North?',
  options: ['The North', 'The Wall', 'The Harrenhal', 'The Reach'],
  answer: 'The Harrenhal'
},

{
  question: 'What does Daenerys say when commanding her dragons to breathe fire?',
  options: ['Vlar Morghulis', 'Dracarys', 'Visersion', 'Valahd'],
  answer: 'Dracarys'
},

{
  question: 'Who is behind the wall that separates the North and the South?',
  options: ['The Night King', 'The Wildlings', 'The Vale', 'The Wall'],
  answer: 'The Wildlings'
},

{
  question: 'Who is the last ruler of the Seven Kingdoms?',
  options: ['Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister', 'Bran Stark'],
  answer: 'Bran Stark'
},
{
  question: 'Who was responsible for the creation of the Night King?',
  options: ['The Lord of Light', 'The Children of the Forest', 'The Drowned God '],
  answer: 'The Children of the Forest'

},
{
  question: 'Where is the House of Black and White, the training temple of the Faceless Men? ',
  options: ['Qarth', 'Bravoos'],
  answer: 'Bravoos'
}


];





let score = 0;


function startGame() {
  let skip = 0;

  questionsArrOfObj.forEach(element => {

    if (skip === 4)
      return;

    console.log(chalk.white.bgBlack.bold(element.question));



    let idx = 1;
    element.options.forEach(option => {
      console.log(chalk.green.bold(`${idx} - ${option}`));
      idx++;
    }
    );

    let answer = readline.question(chalk.blue('What is your answer? '));
    if (answer.toLocaleLowerCase() === 'x') {
      skip++;
      console.log(chalk.white.bgBlack.bold('You skipped this question |' + skip + ' times'));
    }
    else if (element.options[answer - 1] === element.answer) {
      console.log(chalk.green.bold('Correct!'));
      console.log("------------------------");
      score++;
      skip = 0;
    } else {
      skip = 0;
      score--;
      console.log(chalk.red.bold('Wrong!'));
      console.log("------------------------");
    }


  }
  );
}



function printScore(score) {
  console.log(chalk.green.bold(`Your score is ${score}`));
}


startGame();
printScore(score);


