const Vehicle = require('./Vehicle.js')


class Bike extends Vehicle{  
    constructor(tireAmount, color, brakeSystem, gears) {
        super(tireAmount, color);
  
      this.brakeSystem = brakeSystem;
      this.gears = gears;
    }

    getInfo() {
        return `My Bike has a ${this.brakeSystem} and is ${this.color} in color`
    }

  }

  module.exports = Bike;