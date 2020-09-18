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

// Prompt for password length
var lengthAccept = function() {
    var lengthPrompt = prompt("How long do you want your password? Password needs to be between 8 and 128 characters.");
    
    // Prompt only accepts numbers
    if (isNaN(lengthPrompt) || lengthPrompt === "") {
        return lengthAccept();
    }
    var lengthNumber = parseInt(lengthPrompt);
    
    // Password needs to be between 8 - 128 characters
    if (lengthNumber < 8 || lengthNumber > 128) {
        return lengthAccept();
    }
    return lengthNumber;
}

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // Initial password string
    var genPass = "";

    // Length of Password
    var length = lengthAccept();
    
    // Confirming if user wants to include certain characters
    var lowerPrompt = confirm("Do you want lowercase letters?");
    var upperPrompt = confirm("Do you want uppercase letters?");
    var numberPrompt = confirm("Do you want numbers?");
    var symbolPrompt = confirm("Do you want special characters?");

    // Function to add acceptable characters with each other
    var charSet = "";
    function addChar() {
        if (lowerPrompt === true){
            charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
        }
        if (upperPrompt === true){
            charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (numberPrompt === true){
            charSet = charSet + "1234567890";
        }
        if (symbolPrompt === true){
            charSet = charSet + "~!@#$%^&*()_+|?><";
        }
        return charSet;
    }        

    // Calling character list function
    addChar();

    // Checking to see if no characters were selected
    var charAccept = lowerPrompt + upperPrompt + numberPrompt + symbolPrompt;
    if (charAccept === 0) {
        return generatePassword();
    }

    // Loop through to get password
    for (var i = 0; i < length; i++) {
        genPass = genPass + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
    }
    return genPass;
}
