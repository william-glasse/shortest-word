const shortestWord = require('../src/shortestWord');

describe('Shortest Word', () => {
  test('if the input is a single word, return the length of the word', () => {
    expect(shortestWord('word')).toBe(4);
  });
  test('if the input is an empty string, return null', () => {
    expect(shortestWord('')).toBe(0);
  });
  test('should return the length of the shortest word for a list of words', () => {
    expect(shortestWord('bitcoin take')).toBe(4);
    expect(
      shortestWord('bitcoin take over the world maybe who knows perhaps'),
    ).toBe(3);
  });
  test('should work for long words', () => {
    expect(shortestWord('bitcoinerereere take')).toBe(4);
  });
});
