const words = [
  "APPLE",
  "HOUSE",
  "BRAIN",
  "CLOUD",
  "SMILE",
  "DREAM",
  "BEACH",
  "STORM",
  "LIGHT",
  "SPACE",
  "ANIME",
];

export const generateWord = () => {
  //generates a random word from the list
  return words[Math.floor(Math.random() * words.length)];
};
