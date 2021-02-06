// Assignment code here
function createPassword() {
  var useCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

  for (var i=0; i < passwordAttributes.length; i++) {
    var randomIndex = [Math.floor(Math.random() * useCharacters.length)];
    console.log(useCharacters[randomIndex]);
  }
}

function validatePassword() {
  var includeLowercase = window.confirm("Should your password contain lowercase letters?");
  var includeUppercase = window.confirm("Should your password contain uppercase letters?");
  var includeNumeric = window.confirm("Should your password contain numbers?");
  var includeSpecial = window.confirm("Should your password contain special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    window.alert("At least one character type must be selected.");
    validatePassword();
  } else {
      if (includeLowercase) {
        passwordAttributes.lowercaseChar = true;
      }
      if (includeUppercase) {
        passwordAttributes.uppercaseChar = true;
      }
      if (includeNumeric) {
        passwordAttributes.numericChar = true;
      }
      if (includeSpecial) {
        passwordAttributes.specialChar = true;
      }
      createPassword();
    }
}

function generatePassword() {
  var passwordLength = window.prompt("How many characters do you want your password to be?");
  passwordLength = parseInt(passwordLength);
    if (Number.isNaN(passwordLength)) {
      window.alert("Please enter a numeric value.");
      generatePassword();
    } else {
        if (passwordLength < 8 || passwordLength > 128) {
          window.alert("Password must be greater than 8 characters, but less than 129.");
          generatePassword();
        } else {
          passwordAttributes.length = passwordLength;
          validatePassword();
        }
      }
}

var passwordAttributes = [
  {
    length: 0,
    lowercaseChar: false,
    uppercaseChar: false,
    specialChar: false,
    numericChar: false,
    passwordChar: ""
  }
]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("hi");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);