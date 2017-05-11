'use strict';

var userName = prompt('Hi! What\'s your name?');

var defaultAnswersArr = ['Y', 'YA', 'YAH', 'YES', 'N', 'NA', 'NAH', 'NO'];

var playGameOneQuestion = prompt('Oh, you want to know my name? How about we play a game? Ready? (Y/N)').toUpperCase();

// GAME ONE

if (defaultAnswersArr.indexOf(playGameOneQuestion) <= 3) {
  console.log('YES - position of users answers in defaultAnswersArr: ', defaultAnswersArr.indexOf(playGameOneQuestion));

  var number;
  var gameOneCounter = 1;
  var gameOneAntiCounter = 4;
  var flagOne;

  while (number !== 5 && gameOneCounter !== 4) { // while number is not 5, run some code. if gameOneAntiCounter = 0, break
    number = parseInt(prompt('How many letters are in my first name?'));

    if (number < 5) {
      gameOneAntiCounter--;
      gameOneCounter++;
      alert('My name is longer than that! You have ' + gameOneAntiCounter + ' tries left!');
      console.log('number of attempts:', gameOneCounter);
      console.log('user number:', number);

    } else if (number > 5) {
      gameOneAntiCounter--;
      gameOneCounter++;
      alert('My name is shorter than that!  You have ' + gameOneAntiCounter + ' tries left!');
      console.log('number of attempts:', gameOneCounter);
      console.log('user number:', number);

    } else if (number === NaN || number === null) {
      gameOneAntiCounter--;
      gameOneCounter++;
      alert('Please enter a number! Counts as a try!' + gameOneAntiCounter + ' tries left!');
      console.log('number of attempts:', gameOneCounter);
      console.log('user number:', number);
    } else if (number === 5) {
        flagOne = true;
    }
  }

  if (number === 5) {
      alert('You win! I have 5 letters in my name.')
    } else if (gameOneCounter === 4) {
      alert('You lose! Oh well! Let\'s play another game');
  }

  // game two

  var greeting = prompt('Let\'s see if our names have letters in common! Ready? (Y/N)').toUpperCase();

  if (defaultAnswersArr.indexOf(greeting) <= 3) {

    var lettersArr = ['J', 'O', 'N', 'A', 'H'];
    var questionAnswersArr = [];
    var userLetterArr = [];

    for (var i = 0; i < lettersArr.length; i++) {
      var letterQuestionYesNo = prompt('Do you have a "' + lettersArr[i] + '" in your first name?').toUpperCase();
      console.log('user has "' + lettersArr[i] + '" in their first name? ' + letterQuestionYesNo);

      if (defaultAnswersArr.indexOf(letterQuestionYesNo) <= 3) {
        questionAnswersArr.push(1);
        userLetterArr.push(lettersArr[i]);
      } else {
        questionAnswersArr.push(0);
      }
    }

    console.log('user response in an array: ' + questionAnswersArr + '. user response joined: ' + questionAnswersArr.join('') + '.');

    var sum = 0;

    for (var i = 0; i < questionAnswersArr.length; i++) {
      sum += questionAnswersArr[i];
    }
    console.log('total sum:', sum);

    alert('We have ' + sum + ' letters in common!');

    alert('Now that you know my first name, let\'s guess my last name!');

    var lastNameArr = ['O', 'H'];
    var flagTwo;

    while (!flagTwo){
        var gameTwoQuestion = prompt('Let\'s guess one letter of my last name! What letter do you choose? (A-Z)').toUpperCase();

        for (var i = 0; i < lastNameArr.length; i++) {
          if(gameTwoQuestion === lastNameArr[i]) {
            flagTwo = true;
            console.log('flag status:', flagTwo);
          }
          if (!flagTwo) {
            alert('Keep guessing!')
          }
        }

        if (flagTwo) {
          alert('That\'s right! ' + lastNameArr[i] + ' is a letter of my last name!');
        }
    }

    if (flagOne === true) {
      alert(userName + '\'s Question Summary: You guessed how many letters are in my last name in ' + gameOneCounter + ' tries! We also have ' + sum + ' letters in common!');
    } else {
      alert(userName + '\'s Question Summary: Looks like you weren\'t able to guess the letters in my name, but we have ' + sum + ' letters in common!');
    }

  } else if (defaultAnswersArr.indexOf(greeting) > 3) {
    var greetingQuestionTwo = prompt('Do you like having fun? (Y/N)').toUpperCase();

    if ((defaultAnswersArr.indexOf(greeting) > 3) && (defaultAnswersArr.indexOf(greetingQuestionTwo) > 3)) {
      alert('Two NO\'s in a row?? You\'re no fun!');
    } else {
      alert('Well, we can play a different game later!');
    }
  } else {
    alert('Please put a valid response!');
  }

} else {
  console.log('NO - position of users answers in defaultAnswersArr: ', defaultAnswersArr.indexOf(playGameOneQuestion));
}
