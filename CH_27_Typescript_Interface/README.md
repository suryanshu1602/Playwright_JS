# Chapter 27 — TypeScript Interface

## Files

| File | Description |
|------|-------------|
| `IF.ts` | TypeScript interface example — `TestCase` interface with optional properties |
| `IF_Part2.ts` | TypeScript interface example — `APIResponse` interface with optional headers & responseTime |
| `IF_READONLY.ts` | TypeScript `readonly` modifier — `UserProfile` interface |
| `IF_READ_Only.ts` | TypeScript `readonly` modifier — `Config` interface |

## IF.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Interface definition | `interface TestCase { ... }` — defines object shape |
| Q2 | Optional property | `duration?: number` — property may be omitted |
| Q3 | Type-checked object | `let test1: TestCase = { ... }` — enforces interface contract |

## IF_Part2.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Multiple optional props | `headers?: object; responseTime?: number` |

## IF_READONLY.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Readonly property | `readonly id: number` — can read, cannot reassign |

## IF_READ_Only.ts Topics

| # | Concept | Key Syntax |
|---|---------|------------|
| Q1 | Multiple readonly | `readonly apiKey: string; readonly endpoint: string` |

## Run All

```bash
cd CH_27_Typescript_Interface
npx tsc IF.ts IF_Part2.ts IF_READONLY.ts IF_READ_Only.ts --outDir out --strict
node out/IF.js
node out/IF_Part2.js
node out/IF_READONLY.js
node out/IF_READ_Only.js
```
