const shortestWord = (words) => {
  const splitWord = words.split(' ');
  const lengthOfWords = splitWord.map((word) => word.length);
  return Math.min(...lengthOfWords);
};

module.exports = shortestWord;
