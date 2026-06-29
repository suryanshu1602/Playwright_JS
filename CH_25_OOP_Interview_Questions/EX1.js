// EX1.js — OOP Interview Questions

// Q1: Create a class with private fields
class BankAccount {
  #balance;
  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount("Alice", 1000);
account.deposit(500);
console.log("Q1 - Balance:", account.getBalance());

// Q2: Static method
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
console.log("Q2 - Static add:", MathUtils.add(10, 20));

// Q3: Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}
class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}
const dog = new Dog("Buddy");
console.log("Q3 - Inheritance:", dog.speak());

// Q4: Polymorphism
class Shape {
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
}
const shapes = [new Circle(5), new Square(4)];
shapes.forEach(s => console.log("Q4 - Area:", s.area().toFixed(2)));

// Q5: Encapsulation with getter/setter
class Temperature {
  #celsius;
  constructor(celsius) {
    this.#celsius = celsius;
  }
  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }
  set fahrenheit(value) {
    this.#celsius = (value - 32) * 5/9;
  }
  get celsius() {
    return this.#celsius;
  }
}
const temp = new Temperature(25);
console.log("Q5 - 25°C =", temp.fahrenheit, "°F");
temp.fahrenheit = 100;
console.log("Q5 - 100°F =", temp.celsius.toFixed(1), "°C");
