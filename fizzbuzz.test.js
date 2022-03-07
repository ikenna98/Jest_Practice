const fizzHelper = require('./fizzBuzz');

describe ('fizzbuzz helper', () => {
    describe ('fizzBuzz', () => {
        let fizzBuzz = fizzHelper.fizzBuzz;
        test('it exists', () => {
            expect(fizzBuzz).toBeDefined();
        })

        test('if number is a multiple of 5 and 3', () => {
            expect(fizzBuzz(15)).toEqual("FizzBuzz")
        })
    })

    describe ('fizz', () => {
        let fizz = fizzHelper.fizz;
        test('it exists', () => {
            expect(fizz).toBeDefined();
        })

        test('if the number is a multiple of 3', () => {
            expect(fizz(6)).toEqual('Fizz');
        })
    })

    describe ('buzz', () => {
        let buzz = fizzHelper.buzz;
        test('it exists', () => {
            expect(buzz).toBeDefined();
        })

        test('if the number is a multiple of 5', () => {
            expect(buzz(10)).toEqual('Buzz');
        })
    })

    describe ('itself', () => {
        let itself = fizzHelper.itself;
        test('it exists', () => {
            expect(itself).toBeDefined();
        })

        test('if the number is not a multiple of 5 or 3', () => {
            expect(itself(7)).toEqual(7);
        })
    })
})
