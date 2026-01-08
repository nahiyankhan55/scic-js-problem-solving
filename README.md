# Explain 5 Problems

## Problem 1: Reverse a String (String উল্টানো)

- এই problem-এ আমাদের কাজ হলো একটি string উল্টো করে দেওয়া।
- প্রথমে আমি একটা empty string নিয়েছি result নামে।
- তারপর for loop ব্যবহার করে string-এর শেষ character থেকে শুরু করে প্রথম character পর্যন্ত এক এক করে result এর সাথে যোগ করেছি।
- এভাবে যোগ করতে করতে পুরো string উল্টো হয়ে গেছে।
- শেষে সেই reversed string return করেছি।

## Problem 2: Count Vowels (Vowel গোনা)

- এখানে আমাদের একটা string থেকে কয়টা vowel আছে সেটা বের করতে হবে।
- আমি প্রথমে "aeiou" এই vowel গুলা একটা string-এর মধ্যে রেখেছি।
- তারপর একটা counter নিয়েছি count নামে।
- for loop দিয়ে string-এর প্রতিটা character check করেছি।
- যদি character টা vowel এর মধ্যে থাকে, তাহলে count এক করে বাড়িয়েছি।
- শেষে total count return করেছি।

## Problem 4: Find the Maximum Number (সবচেয়ে বড় সংখ্যা)

- এই problem-এ একটা array থেকে সবচেয়ে বড় সংখ্যা বের করতে হবে।
- আমি ধরেই নিয়েছি array-এর প্রথম element-টাই সবচেয়ে বড়।
- তারপর loop চালিয়ে বাকি সব element এর সাথে compare করেছি।
- যদি কোনো সংখ্যা আগেরটার থেকে বড় হয়, তাহলে সেটাকে নতুন max বানিয়েছি।
- loop শেষ হলে max variable-এই সবচেয়ে বড় সংখ্যা থাকে।

## Problem 6: Sum of All Numbers (সব সংখ্যার যোগফল)

- এখানে array-এর সব সংখ্যার যোগফল বের করতে হবে।
- আমি প্রথমে sum = 0 দিয়ে শুরু করেছি।
- তারপর loop দিয়ে array-এর প্রতিটা সংখ্যা এক এক করে sum এর সাথে যোগ করেছি।
- সব সংখ্যা যোগ হয়ে গেলে sum return করেছি।

## Problem 10: PingPong Challenge

- এখানে ১ থেকে ২০ পর্যন্ত সংখ্যা print করতে হবে কিছু condition অনুযায়ী।
- আমি for loop দিয়ে ১ থেকে ২০ পর্যন্ত loop চালিয়েছি।
- যদি সংখ্যা ৩ আর ৫ দুটো দিয়েই divisible হয়, তাহলে "PingPong" print করেছি।
- শুধু ৩ দিয়ে divisible হলে "Ping" print করেছি।
- শুধু ৫ দিয়ে divisible হলে "Pong" print করেছি।
- আর কোনোটা না হলে number-টাই print করেছি।
- এখানে condition check করার order খুব important।
