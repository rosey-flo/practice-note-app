class User {
  constructor(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  }
  
  getAge() {
    return this.age;
  }
  haveBirthday() {
    this.age++
  }
}

//these are the actual objects but can now be called
const emily = new User('Emily', 27, ['bingo', 'fishing']);
const bob = new User('Bob', 57, ['pickleball', 'phone']);

console.log(emily)




