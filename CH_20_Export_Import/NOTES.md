# Chapter 20 Notes — Export & Import

## Key Concepts

- **Named exports**: `export const X = ...`
- **Default exports**: `export default ...`
- **Import with alias**: `import { X as Y } from "..."`

## Example

```js
// utils.js
export const BASE_URL = "https://app.thetestingacademy.com";

// main.js
import { BASE_URL } from "../utils.js";
```
