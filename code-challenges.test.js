// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
const secretCodeWord4 = "EeEe"
const secretCodeWord5 = "Supercalifragilisticexpialidocious"

// input: a string

// output: a string with the following input letters changed to numbers. "a" to 4, "e" to 3, "i" to 1, and "o" to 0

// pseudo:
// Create a function called superSecretCodingMachine that takes a string as a parameter. Use .replaceAll() to replace all instances of the searched letter with the regex search pattern. Use /g to search all occurences of the letter in the string and /i to be case insensitive, then use a comma to separate the search pattern from the replacement value and add corresponding replacement value. Repeat this .replaceALL pattern three additional times, changing to the required corresponding searched letter and its number replacement. Return in one line off the single passed through string parameter.

// test:
// describe("superSecretCodingMachine", () => {
//     it("take in a string and returns a string with a coded message" , () => {
//         const secretCodeWord1 = "Lackadaisical"
//         const secretCodeWord2 = "Gobbledygook"
//         const secretCodeWord3 = "Eccentric"
//         const secretCodeWord4 = "EeEe"
//         const secretCodeWord5 = "Supercalifragilisticexpialidocious"

//         expect(superSecretCodingMachine(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
//         expect(superSecretCodingMachine(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
//         expect(superSecretCodingMachine(secretCodeWord3)).toEqual("3cc3ntr1c"),
//         expect(superSecretCodingMachine(secretCodeWord4)).toEqual("3333"),
//         expect(superSecretCodingMachine(secretCodeWord5)).toEqual("S6p3rc4l1fr4g1l1st1c3xp14l1d0c106s")
//     })
// })

// jest-test-1:
// FAIL  ./code-challenges.test.js
// superSecretCodingMachine
//   ✕ take in a string and returns a string with a coded message

// ● superSecretCodingMachine › take in a string and returns a string with a coded message

//   ReferenceError: superSecretCodingMachine is not defined

//     38 |         const secretCodeWord5 = "Supercalifragilisticexpialidocious"
//     39 |
//   > 40 |         expect(superSecretCodingMachine(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
//        |         ^
//     41 |         expect(superSecretCodingMachine(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
//     42 |         expect(superSecretCodingMachine(secretCodeWord3)).toEqual("3cc3ntr1c"),
//     43 |         expect(superSecretCodingMachine(secretCodeWord4)).toEqual("3333"),

//     at Object.expect (code-challenges.test.js:40:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:
// FAIL  ./code-challenges.test.js
// superSecretCodingMachine
//   ✕ take in a string and returns a string with a coded message (1 ms)

// ● superSecretCodingMachine › take in a string and returns a string with a coded message

//   expect(received).toEqual(expected) // deep equality

//   Expected: "L4ck4d41s1c4l"
//   Received: undefined

//     38 |         const secretCodeWord5 = "Supercalifragilisticexpialidocious"
//     39 |
//   > 40 |         expect(superSecretCodingMachine(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
//        |                                                           ^
//     41 |         expect(superSecretCodingMachine(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
//     42 |         expect(superSecretCodingMachine(secretCodeWord3)).toEqual("3cc3ntr1c"),
//     43 |         expect(superSecretCodingMachine(secretCodeWord4)).toEqual("3333"),

//     at Object.toEqual (code-challenges.test.js:40:59)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-3:
// PASS  ./code-challenges.test.js
// superSecretCodingMachine
//   ✓ take in a string and returns a string with a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// Comment: The below .replaceAll's is where my head initially went. I liked the regex and how overall the code was relatively short but I didn't like how I had to repeat .replaceAll multiple times, though I had to due to the constraints of regex only being only able to pass one replacement value per expression. With some additional research, I was able to get the following two functions using an object to work ALMOST correctly. They work however I ran into an issue where even though I was using the /i to catch both upper and lowercase letterA, the "E" in the secretCodeWord3 was returning undefined. I am still trying to figure out why but I was able to add an additional key:value pair to the object as a work around so that it returns as required. I chose this route because I thought it was a cleaner looking fix as opposed to adding a .toUpperCase or .toLowerCase. I am going to figure out the issue this week as I have extra time.

// const superSecretCodingMachine = (string) => {
//     return string.replaceAll(/a/gi, 4).replaceAll(/e/gi, 3).replaceAll(/i/gi, 1).replaceAll(/o/gi, 0)
// }

// const superSecretCodingMachine = (string) => {
//     regex = /a|e|E|i|o|u/gi;
//     const superSecretCode = {
//         "a": 4,
//         "e": 3,
//         "E": 3,
//         "i": 1,
//         "o": 0,
//       };
//     return string.replaceAll(regex, (matched) => superSecretCode[matched])
// }

const superSecretCodingMachine = (string) => {
    const superSecretCode = {
        "a": 4,
        "e": 3,
        "E": 3,
        "i": 1,
        "o": 0,
        "u": 6,
      };
    return string.replaceAll(/a|e|E|i|o|u/gi, (matched) => superSecretCode[matched])
}

// This one below was done AFTER initial assessment submission. It has a couple additional things cleaned up. The one above passes but I was not happy with it. 

// Additional comment from Tuesday night after looking at the code with fresh eyes for the Wednesday review. It's funny how simple things can look once you step away for a bit and come back with fresh eyes. I looked at it for about 2 min after class when putting the code up for review in the thread. I was able to see right away that to catch other capital letter edge cases, I needed to add the additional key:value pairs. Also that I did not need the caps E in the regex search since I was using the /i. I had looked at doing .toLowerCase after the string but then to reverse that involved a lot more code. So with all this being said, I think my favorite option here has changed back to my original 4 x .replaceAll funtion. Is there a best practice as to which one would be best? Thanks Gene I really appreciate everything your doing with going through all these assessments and your insight into them! 

// const superSecretCodingMachine = (string) => {
//     const superSecretCode = {
//         "a": 4,
//         "A": 4,
//         "e": 3,
//         "E": 3,
//         "i": 1,
//         "I": 1,
//         "o": 0,
//         "O": 0,
//         "u": 6,
//         "U": 6,
//       };
//     return string.replaceAll(/a|e|i|o|u/gi, (matched) => superSecretCode[matched])
// }

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]
// const letterM = "m"
// const letterY = "y"

// input: an array of strings and a single letter

// output: a single array containing only the words that contain the input single letter

// pseudo: Create a function called valueContainsALetter. Pass an array of strings and a single letter string as parameters. Use 
// .filter to create a shallow copy of the original array. Inside .filter, pass the value, then use value.toLowerCase to account for any capital letters. After the parens of the .toLowerCase() use .includes and pass the letter that is to be filtered.


// test:
// describe("valueContainsALetter", () => {
//     it("return an array of all the words containing that particular letter", () => {
//         const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//         const letterA = "a"
//         const letterE = "e"
//         const letterM = "m"
//         const letterY = "y"

//         expect(valueContainsALetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(valueContainsALetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//         expect(valueContainsALetter(fruitArray, letterM)).toEqual(["Mango"])
//         expect(valueContainsALetter(fruitArray, letterY)).toEqual(["Cherry", "Blueberry"])
//     })
// })

// jest-test-1:
// FAIL  ./code-challenges.test.js
// valueContainsALetter
//   ✕ return an aray of all the words containing that particular letter (1 ms)

// ● valueContainsALetter › return an aray of all the words containing that particular letter

//   ReferenceError: valueContainsALetter is not defined

//     161 | describe("valueContainsALetter", () => {
//     162 |     it("return an aray of all the words containing that particular letter", () => {
//   > 163 |       expect(valueContainsALetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         |       ^
//     164 |       expect(valueContainsALetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     165 |       expect(valueContainsALetter(fruitArray, letterM)).toEqual(["Mango"])
//     166 |       expect(valueContainsALetter(fruitArray, letterY)).toEqual(["Cherry", "Blueberry"])

//     at Object.expect (code-challenges.test.js:163:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:
// FAIL  ./code-challenges.test.js
// valueContainsALetter
//   ✕ return an aray of all the words containing that particular letter (1 ms)

// ● valueContainsALetter › return an aray of all the words containing that particular letter

//   expect(received).toEqual(expected) // deep equality

//   Expected: ["Mango", "Apricot", "Peach"]
//   Received: undefined

//     161 | describe("valueContainsALetter", () => {
//     162 |     it("return an aray of all the words containing that particular letter", () => {
//   > 163 |       expect(valueContainsALetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         |                                                         ^
//     164 |       expect(valueContainsALetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     165 |       expect(valueContainsALetter(fruitArray, letterM)).toEqual(["Mango"])
//     166 |       expect(valueContainsALetter(fruitArray, letterY)).toEqual(["Cherry", "Blueberry"])

//     at Object.toEqual (code-challenges.test.js:163:57)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-3:
// PASS  ./code-challenges.test.js
// valueContainsALetter
//   ✓ return an aray of all the words containing that particular letter (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// const valueContainsALetter = (array, letter) => {
//     return array.filter((value) => value.toLowerCase().includes(letter))
// }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// // Expected output: true
// const hand5 = [7, 2, 7, 2, 2]
// const hand6 = ['A', 'K', 7, 5, 1]

// input: an array of five numbers

// output: true if the array contains exactly one pair and one three of a kind. False if it does not.

// pseudo:
// Create a function called checkIfTheHouseIsFull and pass the array containing 5 numbers as the parameter. Create a let variable inside of the function called arr and have it equal the original array that has been sorted using .sort() that will natively return the array values in ascending order. Using a conditional if/else statement, check the sorted values index location against each other using strict = (===). If the values of the 0 & 1 as well as the values of 2, 3, & 4 locations match, OR (||), the values of the 0, 1, & 2 as well as the values of 3 & 4 match, return true. Else return false.

// test:
// describe("checkIfTheHouseIsFull", () => {
//     it('determine whether or not the array is a "full house, exactly one pair and one three of a kind"', () => {
//         const hand1 = [5, 5, 5, 3, 3]
//         const hand2 = [5, 5, 3, 3, 4]
//         const hand3 = [5, 5, 5, 5, 4]
//         const hand4 = [7, 2, 7, 2, 7]
//         const hand5 = [7, 2, 7, 2, 2]
//         const hand6 = ['A', 'K', 7, 5, 6]
//         const hand7 = ['A', 'A', 2, 'A', 2]

//         expect(checkIfTheHouseIsFull(hand1)).toEqual(true)
//         expect(checkIfTheHouseIsFull(hand2)).toEqual(false)
//         expect(checkIfTheHouseIsFull(hand3)).toEqual(false)
//         expect(checkIfTheHouseIsFull(hand4)).toEqual(true)
//         expect(checkIfTheHouseIsFull(hand5)).toEqual(true)
//         expect(checkIfTheHouseIsFull(hand6)).toEqual(false)
//         expect(checkIfTheHouseIsFull(hand7)).toEqual(true)
//     })
// })

// jest-test-1:
// FAIL  ./code-challenges.test.js
// checkIfTheHouseIsFull
//   ✕ determine whether or not the array is a "full house, exactly one pair and one three of a kind"

// ● checkIfTheHouseIsFull › determine whether or not the array is a "full house, exactly one pair and one three of a kind"

//   ReferenceError: checkIfTheHouseIsFull is not defined

//     267 |         const hand7 = ['A', 'A', 2, 'A', 2]
//     268 |
//   > 269 |         expect(checkIfTheHouseIsFull(hand1)).toEqual(true)
//         |         ^
//     270 |         expect(checkIfTheHouseIsFull(hand2)).toEqual(false)
//     271 |         expect(checkIfTheHouseIsFull(hand3)).toEqual(false)
//     272 |         expect(checkIfTheHouseIsFull(hand4)).toEqual(true)

//     at Object.expect (code-challenges.test.js:269:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:
// FAIL  ./code-challenges.test.js
// checkIfTheHouseIsFull
//   ✕ determine whether or not the array is a "full house, exactly one pair and one three of a kind" (2 ms)

// ● checkIfTheHouseIsFull › determine whether or not the array is a "full house, exactly one pair and one three of a kind"

//   expect(received).toEqual(expected) // deep equality

//   Expected: true
//   Received: undefined

//     267 |         const hand7 = ['A', 'A', 2, 'A', 2]
//     268 |
//   > 269 |         expect(checkIfTheHouseIsFull(hand1)).toEqual(true)
//         |                                              ^
//     270 |         expect(checkIfTheHouseIsFull(hand2)).toEqual(false)
//     271 |         expect(checkIfTheHouseIsFull(hand3)).toEqual(false)
//     272 |         expect(checkIfTheHouseIsFull(hand4)).toEqual(true)

//     at Object.toEqual (code-challenges.test.js:269:46)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-3:
// PASS  ./code-challenges.test.js
// checkIfTheHouseIsFull
//   ✓ determine whether or not the array is a "full house, exactly one pair and one three of a kind" (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// Refectors. All functions also work with a letter "face card"

// const checkIfTheHouseIsFull = (array) => {
//     let arr = array.sort() 
//     if (arr[0] === arr[1] && arr[2] === arr[3] && arr[2] === arr[4] 
//         || 
//         arr[0] === arr[1] && arr[0] === arr[2] && arr[3] === arr[4]) {
//         return true
//     }  else {
//         return false
//     }
// }

// const checkIfTheHouseIsFull = (array) => {
//     let a = array.sort()
//     return (a[0] === a[1] && a[2] === a[3] && a[2] === a[4] 
//     || 
//     a[0] === a[1] && a[0] === a[2] && a[3] === a[4] ? true : false) 
// }

// checkIfTheHouseIsFull = (array) => {
//     const count = {}
//         array.map(value => count[value] = (count[value] || 0) + 1)
//         return Object.values(count).includes(2) && Object.values(count).includes(3)
// }

