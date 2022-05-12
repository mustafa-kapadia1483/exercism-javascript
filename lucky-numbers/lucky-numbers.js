// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return toNumber(array1) + toNumber(array2);

  function toNumber(numberArray) {
    return Number(numberArray.join(""));
  }
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reverse = 0;
  let valueCopy = value;

  while (valueCopy > 0) {
    const d = valueCopy % 10;
    reverse = reverse * 10 + d;
    valueCopy = Math.floor(valueCopy / 10);
  }

  return reverse === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";
  return Number(input) ? "" : "Must be a number besides 0";
}
