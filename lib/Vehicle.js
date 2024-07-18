class Vehicle { //this ths the start of the constructor and always start with a standard capital
    constructor(tireAmount, color) {
      this.tireAmount = tireAmount;
      this.color = color
    }
    
    getTireAmount() {
      return this.tireAmount;
    }
  }
  module.exports = Vehicle;