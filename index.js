class Vehicle { //this ths the start of the constructor and always start with a standard capital
  constructor(tireAmount, color) {
    this.tireAmount = tireAmount;
    this.color = color
  }
  
  getTireAmount() {
    return this.tireAmount;
  }
}

class Bike extends Vehicle{  
  constructor(tireAmount, color, brakeSystem, gears) {
      super(tireAmount, color);

    this.brakeSystem = brakeSystem;
    this.gears = gears;
  }
}

class Motorcycle extends Vehicle {
  constructor (tireAmount, color, engine, type) {
    super(tireAmount, color)

    this.engine = engine;
    this.type = type;
  }

  getTireAmount () {
    return this.tireAmount + 'brake pad';
  
}
}

const rad = new Bike(1, 'greeb', 'shimano', 7)
const ninja = new Motorcycle(2, 'red', 'cool engine', 'japanese')

const radTA = rad.getTireAmount();
console.log(radTA);