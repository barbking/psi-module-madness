

  //send The first module will export a function that returns a random number
  function randomNumber(min, max){
      var number = Math.floor(Math.random() * (1 + max - min) + min);
      return number;
    }

module.exports = randomNumber;
