// Problem 1: Reverse a String
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("programming"));
