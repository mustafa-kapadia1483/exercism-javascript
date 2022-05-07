//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  message = message.trim();

  if (message === "") return "Fine. Be that way!";
  if (isYelling() && isEndingWithQuestion())
    return "Calm down, I know what I'm doing!";
  if (isEndingWithQuestion()) return "Sure.";
  if (isYelling()) return "Whoa, chill out!";

  return "Whatever.";

  function isEndingWithQuestion() {
    return message.endsWith("?");
  }

  function isUpperCase() {
    return message.toUpperCase() === message;
  }

  function hasAlphabet() {
    for (const char of message) {
      if (char.toLowerCase() !== char.toUpperCase()) {
        return true;
      }
    }
    return false;
  }

  function isYelling() {
    return hasAlphabet() && isUpperCase();
  }
};
