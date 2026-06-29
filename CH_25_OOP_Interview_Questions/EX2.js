// EX2.js — More OOP Interview Questions

// Q1: Method chaining (return this)
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  add(n) {
    this.value += n;
    return this;
  }
  subtract(n) {
    this.value -= n;
    return this;
  }
  multiply(n) {
    this.value *= n;
    return this;
  }
  getResult() {
    return this.value;
  }
}
const result = new Calculator(10).add(5).subtract(3).multiply(2).getResult();
console.log("Q1 - Chaining:", result);

// Q2: Factory function vs class
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  };
}
const person = createPerson("Alice", 30);
console.log("Q2 - Factory:", person.greet());

// Q3: Composition over inheritance
const canEat = { eat() { return `${this.name} eats`; } };
const canSleep = { sleep() { return `${this.name} sleeps`; } };
const canSwim = { swim() { return `${this.name} swims`; } };

function createDog(name) {
  return { name, ...canEat, ...canSleep };
}
function createFish(name) {
  return { name, ...canEat, ...canSwim };
}
const dog2 = createDog("Buddy");
const fish = createFish("Nemo");
console.log("Q3 - Composition:", dog2.eat(), dog2.sleep());
console.log("Q3 - Composition:", fish.eat(), fish.swim());

// Q4: Singleton pattern
const Singleton = (function() {
  let instance;
  function createInstance() {
    return { id: Math.random(), createdAt: new Date().toISOString() };
  }
  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("Q4 - Singleton same?", s1 === s2, "ID:", s1.id);

// Q5: Constructor vs instanceof
class Car {}
const car = new Car();
console.log("Q5 - instanceof:", car instanceof Car);
console.log("Q5 - constructor:", car.constructor.name);
