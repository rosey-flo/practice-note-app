const Bike = require('./lib/Bike')

const Motorcycle = require('./lib/Motorcycle')


const rad = new Bike(1, 'greeb', 'shimano', 7)
const ninja = new Motorcycle(2, 'red', 'cool engine', 'japanese')

const radTA = rad.getTireAmount();
console.log(radTA);