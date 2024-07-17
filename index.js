const user = {
  name: 'emily',
  age: 27
};


//constructor function - generates objects
function User(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;

  // must call the nested functions in the direct parent to make them work
  
}
User.prototype.getAge = function () {
  return this.age;
}
User.prototype.haveBirthday = function () {
  this.age++;
}


//these are the actual objects but can now be called
const emily = new User('Emily', 27, ['bingo', 'fishing']);
const bob = new User('Bob', 57, ['pickleball', 'phone']);




