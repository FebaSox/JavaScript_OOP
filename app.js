console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/* Class
pets
name
residence
hobbies
*/

class Person {
  constructor(name, residence, hobbies, pets = false) {
    this.name = name; // string
    this.residence = residence; //
    this.hobbies = hobbies;
    this.pets = pets;
  }
  soundOff() {
    console.log("sound off");
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobby) {
    const index = this.hobbies.indexOf(hobby);
    if (index > -1) {
      this.hobbies.splice(index, 1);
    }
  }
  greeting() {
    this.console.log("Hello fellow person!");
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
  constructor(occupation) {
super(name, pets, residence, hobbies);
this.occupation = occupation;
}
}
class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = occupation;
  }

  greeting() {
    this.console.log("Hello, i am a coder!");
}
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let person = new Person("Ben", 0, "Birmingham", ["running", "diy", "reading"]);

  person.addHobby("fencing",);

  Coder.removeHobby("diy");

  console.log(coder);

  coder.greeting();

  console.log(coder.toString());
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
class Calculator {
  constructor() {
    this.result = 0;
  }
  subtract(a, b = this.result) {
    this.result = b - a;
    return this.result;
  }

  add(a, b = this.result) {
    this.result = b + a;
    return this.result;
  }

  multiply(a, b = this.result) {
    this.result = b * a;
    return this.result;
  }

  divide(a, b = this.result) {
    if (a === 0) console.log(`error, divison by 0`);
    return;

    this.result = b / a;
    return this.result;
  }
}

const calc = new Calculator();
