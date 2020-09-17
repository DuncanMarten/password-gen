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

function randomNumber() {
    var random = Math.floor(Math.random()*4 + 1);
    return random;
}

console.log(randomNumber());
// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // Initial password string
    var genPass = "";
    var length = lengthAccept();
    var lowerPrompt = confirm("Do you want lowercase letters?");
    var upperPrompt = confirm("Do you want uppercase letters?");
    var numberPrompt = confirm("Do you want numbers?");
    var symbolPrompt = confirm("Do you want special characters?");

    var charAccept = lowerPrompt + upperPrompt + numberPrompt + symbolPrompt;
    //console.log('charAccept ', charAccept);

    var charArr = [{lowerPrompt}, {upperPrompt}, {numberPrompt}, {symbolPrompt}].filter(
        item => Object.values(item) [0]
    );
    //console.log('charArr ', charArr);

    if (charAccept === 0) {
        return generatePassword();
    }

    //debugger;
    // Loop through to get password
    for (var i = 0; i < length; i++) {
        //var getRandomCharacter = ;
    }
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
