const shortestWord = require('../src/shortestWord');

describe('Shortest Word', () => {
  test('if the input is a single word, return the length of the word', () => {
    expect(shortestWord('word')).toBe(4);
  });
  test('if the input is an empty string, return null', () => {
    expect(shortestWord('')).toBe(null);
  });
});
