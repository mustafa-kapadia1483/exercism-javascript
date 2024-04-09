export const isPangram = text => {
  if (typeof text !== "string") return false;

  text = text.toLowerCase();
  for (const letter of "abcdefghijklmnopqrstuvwxyz") {
    if (!text.includes(letter)) return false;
  }

  return true;
};
