// 1. reverse a string using loops

function reverseString(str) {
    let reverseString = "";

    for(let i = str.length -1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

console.log(reverseString("abcde"))
console.log(reverseString("hello"))
console.log(reverseString("Greetings from The Hacker Collective'"))



// 2. if the string has the same sequence back and forth, return true, else false

let sameBackAndForth = function(str) {
    let reverseString = "";

    for(let i = str.length -1; i >= 0; i--) {
        reverseString += str[i];
    }
    if(str === reverseString) {
        return true
    } else {
        return false;
    }
}

console.log(sameBackAndForth("abba"))
console.log(sameBackAndForth("abcdefg"))
console.log(sameBackAndForth("girafarig"))


// 3. reverse the integer

let reverseInteger = function(num) {
  let arr = num.toString().split("").reverse().join("");

  let newNum;
  if(arr.includes("-")) {
    newNum = parseInt(arr) * -1
  } else {
    newNum = parseInt(arr)
  }

  return newNum;

  
}

console.log(reverseInteger(134))
console.log(reverseInteger(1230))
console.log(reverseInteger(-134))

// 4. find the sum of all items in the array using loops

let sumArr = function(arr) {
    let totalSum = 0;

    for(let i = 0; i < arr.length ; i++) {
        totalSum += arr[i]
    }

    return totalSum;
}

console.log(sumArr([1,2,3,4,5]))
console.log(sumArr([1000,2000,44,55,22]))
console.log(sumArr([123,456,789]))

//5. function takes in a string, then return a new string with uppercase and 2 ! after each word

let deafGrandma = function(str) {
   let capitalLetter = str.toUpperCase()
   let arr = capitalLetter.split(" ")

   function addExclamation(word) {
    let added = word.concat("!!")

    return added
}
   const newArr = arr.map(addExclamation)
   let finalStr = newArr.toString()

   let lastStr = finalStr.split(",").join(" ")
   return lastStr;
}

console.log(deafGrandma("I have a bad feeling about this"))


// 6. what is missing

let whatIsMissing = function(str) {
    let setOfLetters = "abcdefghijklmnopqrstuvwxyz"
    //first letter: 
    let firstLetter = setOfLetters.indexOf(str[0])

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== setOfLetters[firstLetter + i]) {
            return setOfLetters[firstLetter + i]
        }
    }
    return undefined
}

console.log(whatIsMissing("abd"))


// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

// swap("His name is Tom", "Tom", "john") == "His name is John".
// swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms".
// swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error".

let swapWord = function(str, word1, word2) {


if(word1[0].toUpperCase() === word1[0]) {
    word2 = word2[0].toUpperCase() + word2.slice(1)
} else {
    word2 = word2[0].toLowerCase() + word2.slice(1)
}
   let arr = str.split(" ")
   let swapWord = arr.indexOf(word1)


   arr.splice(swapWord,1, word2)

   let newStr = arr.toString().split(",").join(" ")

   return newStr

}

console.log(swapWord("His name is Tom", "Tom", "john"))
console.log(swapWord("Let us get back to more Coding", "Coding", "algorithms"))
console.log(swapWord("This has a spellngi error", "spellngi", "spelling"))

