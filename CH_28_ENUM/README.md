# Chapter 28 — TypeScript Enum

## What is an Enum?
An **enum** is like a **list of fixed choices** — like a drop-down menu where you can only pick from the given options.

---

## Files

| File | Description |
|------|-------------|
| `ENUM.ts` | Basic enum — `TestStatus` with string values |
| `Enum_Fn.ts` | Two enums — `SeverityLevels` (bug priority) & `Environment` (API URLs) |
| `ENUM3.ts` | Enum in functions — `Browser` enum used with `switch` |
| `API_.ts` | Enum as function parameter — `HTTPMethod` for API requests |

---

## ENUM.ts — Basic Enum

```ts
enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}
```

**Output:** `PASS`

---

## Enum_Fn.ts — Multiple Enums

### SeverityLevels — Bug Priority

```ts
enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}
```

### Environment — API URLs

```ts
enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}
```

**Output:**
```
low
https://qa.api.com
```

---

## ENUM3.ts — Enum in Function

```ts
enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}
```

Each browser maps to its engine:
- **Chrome** → Chromium
- **Firefox** → Gecko
- **Safari** → WebKit
- **Edge** → Chromium

**Output:**
```
Launching Chromium (Chrome v120)
Launching Gecko (Firefox v115)
Launching WebKit (Safari v17)
Launching Chromium (Edge v120)
```

---

## API_.ts — Enum as Parameter

```ts
enum HTTPMethod {
    Geto = "GET",
    posto = "POST",
    puto = "PUT",
    deleto = "DELETE"
}
```

**Output:**
```
GET /api/users → 200 OK
POST /api/users → 200 OK
DELETE /api/users/1 → 200 OK
```

---

## Why Use Enums?

| Problem | Solution |
|---------|----------|
| Typing `"chrome"` may have spelling mistakes | `Browser.Chrome` — always correct |
| Forgetting values | Clear names: `HIGH`, `LOW`, `PASS`, `FAIL` |
| Changing a value later | Change in one place, not everywhere |

**In short:** Enums prevent invalid values and make code cleaner! ✅

---

## Run All Files

```bash
npx tsc ENUM.ts Enum_Fn.ts ENUM3.ts API_.ts --outDir out --strict
node out/ENUM.js
node out/Enum_Fn.js
node out/ENUM3.js
node out/API_.js
```
