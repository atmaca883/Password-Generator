// // Get DOM elements
// const passwordInput = document.getElementById("password");
// const generateBtn = document.getElementById("generate-btn");
// const copyBtn = document.getElementById("copy-btn");


// // Generate random password
// function generatePassword() {
//     const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const symbols = "!@#$%^&*_-+=";
//     const length = 12; // Change this to adjust the password length
//     let password = "";

//     const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allCharacters.length);
//         password += allCharacters[randomIndex];
//     }

//     return password;
// }

// // Generate password and update the input field
// function updatePassword() {
//     const password = generatePassword();
//     passwordInput.value = password;
// }

// // Copy password to clipboard
// function copyPassword() {
//     passwordInput.select();
//     passwordInput.setSelectionRange(0, 99999); // For mobile devices

//     document.execCommand("copy");
//     alert("Password copied to clipboard!");
// }

// // Add event listeners to the generate and copy buttons
// generateBtn.addEventListener("click", updatePassword);
// copyBtn.addEventListener("click", copyPassword);

// // Generate initial password on page load
// updatePassword();

// --------------------------------------------------------

$(function () {
	var rangePercent = $('[type="range"]').val();
	$('[type="range"]').on("change input", function () {
		rangePercent = $('[type="range"]').val();
		$("h4").html(rangePercent + "<span></span>");
		$('[type="range"], h4>span').css(
			"filter",
			"hue-rotate(-" + rangePercent + "deg)",
		);
		fillPass(this.value)


		$("h4").css({
			transform: "translateX(-50%) scale(" + (1 + rangePercent / 100) + ")",
			left: rangePercent + "%"
		});
	});
});

function showVal(val) {
	document.getElementById("rangevalue").textContent = val
}

function fillPass(range) {

	let combinedArray = []

	const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "o", "r", "s", "t", "u", "v", "y", "z", "w"];
	const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "O", "R", "S", "T", "U", "V", "Y", "Z", "W"];
	const numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
	const specials = ["~", "\\", "`", "[", "]", "{", "}", "|", ":", ";", "<", ">", ".", "?", "/"];


	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}


	const selectedChars = [];
	if (document.getElementById("lowerCheck").checked) {
		selectedChars.push(...lowerChar);
	}
	if (document.getElementById("upperCheck").checked) {
		selectedChars.push(...upperChar);
	}
	if (document.getElementById("numberCheck").checked) {
		selectedChars.push(...numberChar);
	}
	if (document.getElementById("symbolCheck").checked) {
		selectedChars.push(...symbols);
	}
	if (document.getElementById("specialCheck").checked) {
		selectedChars.push(...specials);
	}




	const passwordLength = range
	let password = '';
	for (let i = 0; i < passwordLength; i++) {
		shuffleArray(selectedChars)
		password += selectedChars[0]
	}

	document.getElementById("passDisplay").value = password

	let strongSpan = document.getElementById("strongSpan")

	let passwordStrength;
	const length = selectedChars.length;

	if (selectedChars.length === 0) {
		alert("Lütfen en az bir karakter türü seçin.")

	}
	if (range === 1) {
		strongSpan.textContent = "Weak"
		strongSpan.style.backgroundColor = "#FFFF99"
		strongSpan.style.color = "#000"
	} else if (range <= 5) {
		strongSpan.textContent = "A little weak"
		strongSpan.style.backgroundColor = "#FFFF66"
		strongSpan.style.color = "#000"
	} else if (range <= 10) {
		strongSpan.textContent = "Somewhat Normal"
		strongSpan.style.backgroundColor = "#FFFF33"
		strongSpan.style.color = "#000"
	} else if (range <= 16) {
		strongSpan.textContent = "Normal"
		strongSpan.style.backgroundColor = "#FFFF00"
		strongSpan.style.color = "#000"
	} else if (range <= 20) {
		strongSpan.textContent = "A Little Strong"
		strongSpan.style.backgroundColor = "#CCCC00"
		strongSpan.style.color = "#fff"
	} else if (range <= 26) {
		strongSpan.textContent = "Strong"
		strongSpan.style.backgroundColor = "#999900"
		strongSpan.style.color = "#fff"
	} else if (range <= 34) {
		strongSpan.textContent = "Very strong"
		strongSpan.style.backgroundColor = "#666600"
		strongSpan.style.color = "#fff"
	} else {
		strongSpan.textContent = "Very Powerful+"
		strongSpan.style.backgroundColor = "#333300"
		strongSpan.style.color = "#fff"
	}

}



document.getElementById("generateButton").addEventListener("click", function () {
	fillPass(document.getElementById("range").value)
});

document.getElementById("copyButton").addEventListener("click", function () {

	var copyText = document.getElementById("passDisplay");

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value);

	copyAlert("copyButton")

});

function copyAlert(id) {

	let succes = document.getElementById(id)
	function changeClass() {
		succes.classList.remove("copyButton");
		succes.classList.add("copySuccesButton");
		succes.textContent = "\u2713";
	}

	function revertClass() {
		succes.classList.remove("copySuccesButton");
		succes.classList.add("copyButton");
		succes.textContent = "Copy";
	}

	changeClass();

	setTimeout(revertClass, 1000);

}