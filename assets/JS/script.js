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

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // Initial password string
    var genPass = "";
    var length = lengthAccept();
    var lowerPrompt = confirm("Do you want lowercase letters?");
        console.log(lowerPrompt);
        
    var upperPrompt = confirm("Do you want uppercase letters?");
        console.log(upperPrompt);
        
    var numberPrompt = confirm("Do you want numbers?");
        console.log(numberPrompt);

    var symbolPrompt = confirm("Do you want special characters?");
        console.log(symbolPrompt);

    
        

    var charAccept = lowerPrompt + upperPrompt + numberPrompt + symbolPrompt;
    

    var charArr = [{lowerPrompt}, {upperPrompt}, {numberPrompt}, {symbolPrompt}].filter(
        item => Object.values(item) [0]
    );
    
    //var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+|?><";

    var genPass = "";


    if (charAccept === 0) {
        return generatePassword();
    }

    //debugger;
    // Loop through to get password
    for (var i = 0; i < length; i++) {
        genPass = genPass + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
    }
    return genPass;
}
