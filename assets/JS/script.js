// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Prompt for password length
var lengthAccept = function() {
    var lengthPrompt = prompt("How long do you want your password? Password needs to be between 8 and 128 characters.");
    if (isNaN(lengthPrompt) || lengthPrompt === "") {
        return lengthAccept();
    }
    var lengthNumber = parseInt(lengthPrompt);
    //console.log(lengthPrompt);
    if (lengthNumber < 8 || lengthNumber > 128) {
        return lengthAccept();
    }
    return lengthNumber;
}


//Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbolStr = "!@#$%^&*()?<>|~?";
    return symbolStr[Math.floor(Math.random() * symbolStr.length)];
}
