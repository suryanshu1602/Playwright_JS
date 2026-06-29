# Chapter 25 — OOP Interview Questions

## Files

| File | Description |
|------|-------------|
| `EX1.js` | OOP interview questions covering 4 pillars of OOP |
| `EX2.js` | More OOP interview questions (chaining, factory, composition, singleton) |

## EX1.js Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Private fields | `#balance` — hides data from outside access |
| Q2 | Static methods | `static add()` — called on class, not instance |
| Q3 | Inheritance | `extends` — child class inherits from parent |
| Q4 | Polymorphism | Method overriding — same method, different behavior |
| Q5 | Encapsulation | Getters/setters — controlled property access |

## EX2.js Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Method chaining | `return this` — chain multiple calls |
| Q2 | Factory function | `createPerson()` — function returns object, no `new` |
| Q3 | Composition | Object spread `...` — mix behaviors instead of inherit |
| Q4 | Singleton | IIFE + closure — only one instance allowed |
| Q5 | instanceof | `car instanceof Car` — check object's class |

## Run

```bash
node CH_25_OOP_Interview_Questions/EX1.js
node CH_25_OOP_Interview_Questions/EX2.js
```
