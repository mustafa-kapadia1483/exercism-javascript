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

  const hasNumber = () => {
    const digitMatching = /\d/;
    return digitMatching.test(message);
  };

  if (isUpperCase() && isCharPresent("?"))
    return "Calm down, I know what I'm doing!";
  if (isCharPresent("?")) return "Sure.";
  if (message.toLowerCase() === "bob") return "Fine. Be that way!";
  if (isUpperCase() && !hasNumber()) return "Whoa, chill out!";

  return "Whatever.";
};
