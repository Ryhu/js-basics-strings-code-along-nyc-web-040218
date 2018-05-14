// Write your code in this file!

let currentUser = "bob";
let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
let excitedWelcomeMessage = welcomeMessage.toUpperCase();
// welcomeMessage
// contains "Welcome to Flatbook, " ‣
// ReferenceError: welcomeMessage is not defined
//     at Context.it (test/indexTest.js:13:14)
// contains the value of the 'currentUser' variable ‣
// ReferenceError: welcomeMessage is not defined
//     at Context.it (test/indexTest.js:17:14)
// ends with an exclamation point! ‣
// ReferenceError: welcomeMessage is not defined
//     at Context.it (test/indexTest.js:21:14)
// excitedWelcomeMessage
// contains "WELCOME TO FLATBOOK, " ‣
// ReferenceError: excitedWelcomeMessage is not defined
//     at Context.it (test/indexTest.js:27:14)
// contains the value of the 'currentUser' variable ‣
// ReferenceError: currentUser is not defined
//     at Context.it (test/indexTest.js:31:36)
// ends with an exclamation point ‣
// ReferenceError: excitedWelcomeMessage is not defined
//     at Context.it (test/indexTest.js:37:14)
// shortGreeting
// contains "Welcome, " ‣
// ReferenceError: shortGreeting is not defined
//     at Context.it (test/indexTest.js:43:14)
// contains the first initial of the name stored in the 'currentUser' variable ‣
// ReferenceError: currentUser is not defined
//     at Context.it (test/indexTest.js:47:28)
// ends with an exclamation point ‣
// ReferenceError: shortGreeting is not defined
//     at Context.it (test/indexTest.js:55:14)