export const BASE_URL = "https://app.thetestingacademy.com/playwright";

export function formatUpperCaseString(str) {
  return str.toUpperCase();
}

export function formatTestName(testName) {
  return `[Test] ${testName}`;
}
