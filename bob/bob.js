//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  message = message.trim();
  const isEndingWithQuestion = () => {
    return message.endsWith("?");
  };

  const isUpperCase = () => {
    return message.toUpperCase() === message;
  };

  const hasAlphabet = () => {
    for (const char of message) {
      if (char.toLowerCase() !== char.toUpperCase()) {
        return true;
      }
    }
    return false;
  };
  if (message === "") return "Fine. Be that way!";
  if (hasAlphabet() && isUpperCase() && isEndingWithQuestion())
    return "Calm down, I know what I'm doing!";
  if (isEndingWithQuestion()) return "Sure.";
  if (hasAlphabet() && isUpperCase()) return "Whoa, chill out!";

  return "Whatever.";
};
