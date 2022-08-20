const isVowel = (char) => "aeiou".includes(char);

const vowelCount = (str) => {
  const vowelMap = new Map();
  for (const char of str.toLowerCase()) {
    if (isVowel(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
};

console.log(vowelCount("sky")); // Map(0) {}

console.log(vowelCount("apple")); // Map(2) { 'a' => 1, 'e' => 1 }

console.log(vowelCount("banana")); // Map(1) { 'a' => 3 }

console.log(vowelCount("atmosphere")); // Map(3) { 'a' => 1, 'o' => 1, 'e' => 2 }
