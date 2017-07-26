// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1,num2){
    // Your answer here
    if(num1>num2){
      return num1;
    } else if (num1 === num2){
      return "The number's are equal. There is no maximum";
    } else {
      return num2
    }
}

console.log("1. max of 87594 and 98347")
console.log(max(87594,98347))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    // Your answer here
    if(num1 === num2 && num2 === num3){
      return "The numbers are equal: " + num1;
    } else if (num1 === num2 && num1 > num3){
      return num1;
    } else if (num1 > num2 && num1 == num3){
      return num1
    } else if (num1 > num2 && num1 > num3){
      return num1;
    } else if (num1 < num2 && num2 == num3){
      return num2;
    } else if (num1 < num2 && num2 > num3){
      return num2;
    } else if (num1 < num2 && num2 > num3){
      return num3;
    } else {
      return "Some of the inputs were not numbers"
    }
}

console.log("2. 234, 5690, -7098");
console.log(maxOfThree(234, 5690, -7098));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char == 'a'){
      return true;
    } else if (char == 'e'){
      return true;
    } else if (char == 'i'){
      return true;
    } else if (char == 'o'){
      return true;
    } else if (char == 'u'){
      return true;
    } else if (char == 'y'){
      return true;
    } else {
      return false;
    }
}

console.log("3. letter p");
console.log(isVowel("p"));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
  return num1 + num2 ;
}

console.log("4. sum 98457 and 289347");
console.log(sum(98457,289347));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3){
  return (num1 + num2 + num3)/3;
}

console.log("5. average of 4, 5, and 6");
console.log(avg(4,5,6));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string){


}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1,num2){
  if (num1 < num2){
    return true;
  } else {
    return false;
  }
}

console.log("7. Is the second number larger? 4 and 0");
console.log(greaterThan(4,0));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
let name = prompt("What is your name?");

function greet(name){
  return "8. Hello, " + name +"!";
}

console.log(greet(name));
alert(greet(name));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(a,b,c,d){
  if (typeof(a)==typeof(b) && typeof(a)==typeof(c) && typeof(a)==typeof(d) && typeof(b)==typeof(c) && typeof(b)==typeof(d) && typeof(c)==typeof(d)){
    return "Hop " + a + "hop and " + b + "hop lost " + c + "hop " + d + "!";
  } else{
    return "Not enough inputs, or some of the inputs were not words";
  }
}

console.log(("9. cat, duck, cow, Albert"));
console.log(madlib("cat", "duck", "cow", "Albert"));
document.write(madlib("cat", "duck", "cow", "Albert"));
