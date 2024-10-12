// Random Password Generator

// Fixed: Moved this inside the function to get the latest input value dynamically when button is clicked.
const passwordElement = document.getElementById('password');

function generatePassword() {
  const inputField = document.getElementById('inputField').value; // Fixed: Retrieve the input value dynamically when the function is called.
  
  const length = Number(inputField);
  const includeLowercase = true;
  const includeUppercase = true;
  const includeNumber = true;
  const includeSymbol = true;

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()';

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumber ? numberChars : "";
  allowedChars += includeSymbol ? symbolChars : "";

  
  if (length <= 0) {
    passwordElement.textContent = "Password length should be greater than zero.";
    return;
  }

  if (allowedChars.length === 0) {
    passwordElement.textContent = "At least one type of character should be included.";
    return;
  }

  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  
  passwordElement.textContent = password;
}


