var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChars = "!@#$%^&*_-+=';:,./?|";
var result = [];

var form = document.getElementById("pa");
var tn = document.getElementById("tn");
var upc = document.getElementById("upc");
var lcc = document.getElementById("lcc");
var mun = document.getElementById("mun");
var spc = document.getElementById("spc");
var passwordOutput = document.getElementById("password-output");
var copyButton = document.getElementById("copy-button");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var userInput = parseInt(tn.value);
  var useUppercase = upc.checked;
  var useLowercase = lcc.checked;
  var useNumbers = mun.checked;
  var useSpecialChars = spc.checked;

  var characterSet = "";

  if (useUppercase) {
    characterSet += uppercaseLetters;
  }

  if (useLowercase) {
    characterSet += lowercaseLetters;
  }

  if (useNumbers) {
    characterSet += numbers;
  }

  if (useSpecialChars) {
    characterSet += specialChars;
  }
  
  for (var i = 0; i < userInput; i++) {
    result[i] = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  var password = result.join("");
  passwordOutput.textContent = password;
  copyButton.setAttribute("data-clipboard-text", password);
});

copyButton.addEventListener("click", function () {
    event.preventDefault();
  var passwordToCopy = copyButton.getAttribute("data-clipboard-text");

  var textarea = document.createElement("textarea");
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);

  showMessage("Password copied to clipboard!");

  setTimeout(function () {
    hideMessage();
  }, 3000);
});

function showMessage(message) {
  var messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.classList.add("show");
}

function hideMessage() {
  var messageElement = document.getElementById("message");
  messageElement.textContent = "";
  messageElement.classList.remove("show");
}