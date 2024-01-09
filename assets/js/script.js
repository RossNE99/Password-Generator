// Array of special characters to be included in password
var specialCharactersArr = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please enter Password Length, must be between 8 and 128 characters.")
  while (!parseInt(passwordLength) || passwordLength<8 || passwordLength>128){ //loop until user provides a valid input
    !parseInt(passwordLength) ? passwordLength = prompt("Password Length must be a number") //if not a number then prompt for password length again
    : passwordLength<8 ? passwordLength = prompt("Password Length must greater then 8") //prompt again if password is less then 8 characters
    : passwordLength = prompt("Password Length must Less then 128") // prompt again if password is more then 128 characters
  }

  while (!lowerCase && !upperCase && !numeric && !specialCharacters){ //loops until user selects atleast one option
    var lowerCase = confirm("You MUST pick one of the following options. Do you want lower case letters?")
    var upperCase = confirm("Do you want uppper case letters?")
    var numeric = confirm("Do you want numbers?")
    var specialCharacters = confirm("Do you want special characters?")
  }
  var passwordOptions = {passwordLength, lowerCase, upperCase, numeric, specialCharacters} //Add all user inputs to object
  return passwordOptions
}

// Function for getting a random number
function getRandomNumber(length) {
  return Math.floor(Math.random()*length);
}

// Function to generate password with user input
function generatePassword(passwordOptions) {
  var {passwordLength, lowerCase, upperCase, numeric, specialCharacters } = passwordOptions; //destructure object into varables
  var characters = "";
  var password = "";

  // Include lowercase characters if specified
  if (lowerCase) {
    characters += lowerCasedCharacters.join(''); //add lowerCase characters to characters varable
    password += lowerCasedCharacters[getRandomNumber(lowerCasedCharacters.length)]  //make sure that a lowerCase is included if slected 
  }

  // Include uppercase characters if specified
  if (upperCase) {
    characters += upperCasedCharacters.join('');
    password += upperCasedCharacters[getRandomNumber(upperCasedCharacters.length)]  //make sure that a upperCase is included if slected 
  }

  // Include numeric characters if specified
  if (numeric) {
    characters += numericCharacters.join('');
    password += numericCharacters[getRandomNumber(numericCharacters.length)]  //make sure that a number is included if slected 
  }

  // Include special characters if specified
  if (specialCharacters) {
    characters += specialCharactersArr.join('');
    password += specialCharactersArr[getRandomNumber(specialCharactersArr.length)]  //make sure that a specialCharacters's is included if slected 
  }

  //genarate password and randommise the order of characters in password
  for (let i = password.length; i < passwordLength; i++) {
    const randomIndex = getRandomNumber(characters.length)
    password += characters.charAt(randomIndex);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getPasswordOptions());
  var passwordText = document.querySelector('#password');
  passwordText.value = password; //dispay password on the page
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);