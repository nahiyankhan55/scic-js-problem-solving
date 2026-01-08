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

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));
