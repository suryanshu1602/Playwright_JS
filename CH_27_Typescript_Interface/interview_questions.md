# TypeScript Interface — Interview Questions

## Q1: What is an interface in TypeScript?

An interface defines the **shape** of an object — what properties and methods it must have.

```ts
interface TestCase {
  id: number;
  name: string;
  status: string;
}
```

---

## Q2: How do you make a property optional?

Use `?` after the property name:

```ts
interface TestCase {
  duration?: number;  // optional
}
```

---

## Q3: What does `readonly` do?

It allows reading but **prevents reassignment** after creation:

```ts
interface User {
  readonly id: number;
  name: string;
}
let u: User = { id: 1, name: "Alice" };
u.name = "Bob";    // ✅ allowed
// u.id = 2;       // ❌ Error: readonly
```

---

## Q4: Can an interface have optional and readonly together?

Yes:

```ts
interface Config {
  readonly apiKey: string;
  timeout?: number;
}
```

---

## Q5: What happens if you miss a required property?

TypeScript throws a compile-time error:

```ts
let test: TestCase = { id: 1 };  // ❌ Error: property 'name' is missing
```

---

## Q6: Difference between `interface` and `type`?

| Feature | `interface` | `type` |
|---------|-------------|--------|
| Object shape | ✅ Yes | ✅ Yes |
| Extend/merge | `extends` | `&` (intersection) |
| Declaration merging | ✅ Yes | ❌ No |
| Union/primitive types | ❌ No | ✅ Yes |
