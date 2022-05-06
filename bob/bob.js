//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {
  const isCharPresent = character => {
    return message.indexOf(character) !== -1;
  };

  const isUpperCase = () => {
    return message === message.toUpperCase();
  };

  const hasAlphabet = () => {
    for (const char of message) {
      if (char.toLowerCase() !== char.toUpperCase()) {
        return true;
      }
    }
    return false;
  };

  if (isUpperCase() && isCharPresent("?"))
    return "Calm down, I know what I'm doing!";
  if (isCharPresent("?")) return "Sure.";
  if (message.toLowerCase() === "bob") return "Fine. Be that way!";
  if (isUpperCase() && hasAlphabet()) return "Whoa, chill out!";

  return "Whatever.";
};
