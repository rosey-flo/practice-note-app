const Bike = require('../lib/Bike.js')



describe('Our dummy test', () => {
    it('Should add 1 + 1', () => {
        const sum = 1 + 1;

        expect(sum).toBe(2)
    });
    it('Should capitalize a string', () => {
        const cap = str => str[0].toUpperCase() + str.slice(1)

        expect(cap('bob')).toBe('Bob')

    })
});

describe('Bike Tests', () => {
    it('Should return an expected instance object', () => {
        const tricycle = new Bike(3, 'blue', 'balance', 1)
        const example = {
            tireAmount: 3,
            color: 'blue',
            brakeSystem: 'balance',
            gears: 1
        };
        expect(tricycle).toEqual(example)
    })
    it('Should return the correct info', () => {
        const tricycle = new Bike(3, 'blue', 'stop', 1)

        const resulty = 'My Bike has a stop and is blue in color';

        expect(tricycle.getInfo()).toBe(resulty);
    }) 
  

})

