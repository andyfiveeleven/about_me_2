'use strict';

var greeting = prompt('Let\'s see if our names have letters in common! Ready? (Y/N)').toUpperCase();

if (greeting === 'Y' || greeting === 'YA' || greeting === 'YAH' || greeting === 'YES') {

  var sum = 0;

  var questionJ = prompt('Do you have a "J" in your name?').toUpperCase();
  console.log('user has J:', questionJ);
  var questionO = prompt('Do you have a "O" in your name?').toUpperCase();
  console.log('user has O:', questionO);
  var questionN = prompt('Do you have a "N" in your name?').toUpperCase();
  console.log('user has N:', questionN);
  var questionA = prompt('Do you have a "A" in your name?').toUpperCase();
  console.log('user has A:', questionA);
  var questionH = prompt('Do you have a "H" in your name?').toUpperCase();
  console.log('user has H:', questionH);

  var questionArr = [];

  if (questionJ === 'Y' || questionJ === 'YA' || questionJ === 'YAH' || questionJ === 'YES') {
    questionArr.unshift(1);
  } else {
    questionArr.unshift(0);
  }

  if (questionO === 'Y' || questionO === 'YA' || questionO === 'YAH' || questionO === 'YES') {
    questionArr.unshift(1);
  } else {
    questionArr.unshift(0);
  }

  if (questionN === 'Y' || questionN === 'YA' || questionN === 'YAH' || questionN === 'YES') {
    questionArr.unshift(1);
  } else {
    questionArr.unshift(0);
  }

  if (questionA === 'Y' || questionA === 'YA' || questionA === 'YAH' || questionA === 'YES') {
    questionArr.unshift(1);
  } else {
    questionArr.unshift(0);
  }

  if (questionH === 'Y' || questionH === 'YA' || questionH === 'YAH' || questionH === 'YES') {
    questionArr.unshift(1);
  } else {
    questionArr.unshift(0);
  }

  console.log('user response in array format:', questionArr);
  console.log('user response in code form:', questionArr.join(''));

  function sumMachine() {
    for(var i = 0; i < questionArr.length; i++) {
      sum += questionArr[i];
    }

    // in-scope variable
    console.log('in scope variable:', sum);

    if (sum === 5) {
      alert('We have 5 letters in common!');
    } else if (sum === 4) {
      alert('We have 4 letters in common!');
    } else if (sum === 3) {
      alert('We have 3 letters in common!');
    } else if (sum === 2) {
      alert('We have 2 letters in common!');
    } else if (sum === 1) {
      alert('We have 1 letters in common!');
    } else if (sum === 0) {
      alert('We have nothing in common!');
    };
  }

  // global variable sum
  console.log('out of scope variable:', sum);

  sumMachine();

} else if (greeting === 'N' || greeting === 'NA' || greeting === 'NAH' || greeting === 'NO') {

  var greetingQuestionTwo = prompt('Do you like having fun? (Y/N)').toUpperCase();

    if ((greeting === 'N' || greeting === 'NA' || greeting === 'NAH' || greeting === 'NO') && (greetingQuestionTwo === 'N' || greetingQuestionTwo === 'NA' || greetingQuestionTwo === 'NAH' || greetingQuestionTwo === 'NO')) {
      alert('Two NO\'s in a row?? You\'re no fun!');
    } else {
      alert('Well, we can play a different game later!');
    }
}
