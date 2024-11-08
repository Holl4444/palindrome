const checkButton = document.getElementById("check-btn");
const inputToCheck = document.getElementById("text-input");
const outputResult = document.getElementById("result");
const outputContainer = document.getElementById("output");

// Prepare string for comparison by removing inconsequential
// characters and making everything one case.
function cleanString(str) {
  const regex = /[^A-Za-z0-9]/g;
  const lowerStr = str.toLowerCase();
  return lowerStr.replace(regex, "");
}

// Return a reversed string for comparison
function reverseString(str) {
  let strArr = str.split("");
  let reversedStrArr = strArr.reverse();
  let reversedStr = reversedStrArr.join("");
  return reversedStr;
}

/*
Main function.
If the input is empty, request input.
Make a clean copy and a reversed clean copy of the string.
Compare them to check for a palindrome.
Update the results paragraph text.
*/
const checkPalindrome = (input) => {
  const initialInputValue = input;

  if (input.length == 0) {
    alert("Please input a value");
    return;
  }

  const cleanedString = cleanString(input);
  const reversedString = reverseString(cleanedString);

  if (cleanedString === reversedString) {
    outputResult.innerHTML = `${initialInputValue.bold()} is a palindrome`;
    outputContainer.classList.remove("hidden");
  } else {
    outputResult.innerHTML = `${initialInputValue.bold()} is not a palindrome`;
    outputContainer.classList.remove("hidden");
  }
};

checkButton.addEventListener("click", () => {
  checkPalindrome(inputToCheck.value);
  inputToCheck.value = "";
});

inputToCheck.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(inputToCheck.value);
    inputToCheck.value = "";
  }
});

inputToCheck.addEventListener("click", () => {
  outputContainer.classList.add("hidden");
});

// If click in input field, classList hidden again
