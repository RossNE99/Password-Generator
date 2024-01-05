// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = 8;
  passwordLength = prompt("Please enter Password Length, must be between 8 and 16 characters. Default is 8")
    while (!parseInt(passwordLength) || passwordLength<8 || passwordLength>16){
      !parseInt(passwordLength) ? passwordLength = prompt("Password Length must be a number")
      : passwordLength<8 ? passwordLength = prompt("Password Length must greater then 8")
      : passwordLength = prompt("Password Length must Less then 16")
    }

  while (!lowerCase && !upperCase && !numeric && !specialCharacters){
    var lowerCase = confirm("You MUST pick one of the following options. Do you want lower case letters?")
    var upperCase = confirm("Do you want uppper case letters?")
    var numeric = confirm("Do you want numbers?")
    var specialCharacters = confirm("Do you want special characters?")
  }
  var passwordOptions = {passwordLength, lowerCase, upperCase, numeric, specialCharacters}
  return passwordOptions
}

// Function for getting a random element from an array
function getRandomNumber(lenght=9) {
  return Math.floor(Math.random()*lenght);
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);