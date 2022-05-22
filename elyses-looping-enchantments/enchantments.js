// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardOccurrence = 0;
  // Checking if a card in stack is equal to card provided as parameter
  stack.forEach(stackCard => stackCard === card && cardOccurrence++);
  return cardOccurrence;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let countOfType = 0;
  stack.forEach(stackCard => isEven(stackCard) === type && countOfType++);
  return countOfType;
  function isEven(num) {
    return num % 2 === 0;
  }
}
