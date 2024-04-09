export const isPangram = text => {
  text = text.toLowerCase();

  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every(letter => text.includes(letter));
};
