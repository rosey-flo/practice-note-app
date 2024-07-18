const Motorcycle = require('../lib/Motorcycle.js')

describe('Motorcycle tests', () => {
    it('Should return expected get tireAmount result', () => {
        const motor = new Motorcycle(2, 'green', 'vroom', 'street')
        const result = motor.getTireAmount();

        expect(result).toBe('2 brake pad')
    })
})