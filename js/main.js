// Get DOM elements
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");


// Generate random password
function generatePassword() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-+=";
    const length = 12; // Change this to adjust the password length
    let password = "";

    const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

// Generate password and update the input field
function updatePassword() {
    const password = generatePassword();
    passwordInput.value = password;
}

// Copy password to clipboard
function copyPassword() {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Add event listeners to the generate and copy buttons
generateBtn.addEventListener("click", updatePassword);
copyBtn.addEventListener("click", copyPassword);

// Generate initial password on page load
updatePassword();
