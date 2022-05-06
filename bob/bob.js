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

  if (isUpperCase() && isCharPresent("?"))
    return "Calm down, I know what I'm doing!";
  else if (isCharPresent("?")) return "Sure.";
  else if (isUpperCase()) return "Whoa, chill out!";
  else if (message.toLowerCase() === "bob") return "Fine. Be that way!";

  return "Whatever.";
};
