function fizzBuzz(num){
    if (num%3 === 0 && num%5 === 0){
        return "FizzBuzz";
    }
}

function fizz(num){
    if (num%3 === 0 && num%5 !== 0){
        return 'Fizz';
    }
}

function buzz(num){
    if (num%5 === 0 && num%3 !== 0){
        return 'Buzz';
    }
}

function itself(num){
    if (num%5 !== 0 && num%3 !== 0){
        return num;
    }
}

module.exports = {fizzBuzz, fizz, buzz, itself};
