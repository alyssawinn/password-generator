// Assignment code here
//creates random password based on character types and adds it to
function createPassword() {
  var lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numberCharacters = ["0123456789"];
  var specialCharacters = ["!#$%&'()*+,-./:;<=>?@[]^_`{}|~"];

  var availableCharacters = [];
  var generatedPassword = [];

  if (passwordAttributes.lowercaseChar === true) {
    availableCharacters += lowercaseCharacters
  }

  if (passwordAttributes.uppercaseChar === true) {
    availableCharacters += uppercaseCharacters;
  }

  if (passwordAttributes.numericChar === true) {
    availableCharacters += numberCharacters;
  }

  if (passwordAttributes.specialChar === true) {
    availableCharacters += specialCharacters;
  }

  for (var i=0; i < passwordAttributes.length; i++) {
      var randomIndex = [Math.floor(Math.random() * availableCharacters.length)];
      generatedPassword.push(availableCharacters[randomIndex]);
    }

  var passwordString = generatedPassword.join("");
  passwordAttributes.passwordChar = passwordString;
}

//confirms character types neeeded in password
function determineCharacters() {
  var includeLowercase = window.confirm("Should your password contain lowercase letters?");
  var includeUppercase = window.confirm("Should your password contain uppercase letters?");
  var includeNumeric = window.confirm("Should your password contain numbers?");
  var includeSpecial = window.confirm("Should your password contain special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    window.alert("At least one character type must be selected.");
    determineCharacters();
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

//requests and validates number of characters; returns password once created
function generatePassword() {
  passwordAttributes.reset();
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
          determineCharacters();
        }
      }

      return passwordAttributes.passwordChar;
}

//password attributes object
var passwordAttributes = {
    length: 0,
    lowercaseChar: false,
    uppercaseChar: false,
    specialChar: false,
    numericChar: false,
    passwordChar: "",
    reset: function () {
      this.lowercaseChar = false;
      this.uppercaseChar = false;
      this.specialChar = false;
      this.numericChar = false;
    }
  };

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