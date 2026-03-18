// Eric Cheyssial | CSC 193A | Assignment 5

// Main buttons.
const biggerButton = document.querySelector("#biggerButton");
const fancyButton = document.querySelector("#fancyShmancy");
const boringButton = document.querySelector("#boringBetty");

// HTML textarea reference.
const textArea = document.getElementById("userText");

// Original alert for "Bigger!" click.
/*  function alertBiggerClicked() {    
        alert("Hello, world!");
    } */

// biggerButton.onclick = alertBiggerClicked;

function increaseFontSize() {
  textArea.style.fontSize = "24pt";
} // function increaseFontSize

function styleText() {
    if (fancyButton.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    // Assess whether "BoringBetty" was checked, revert font.
    } else if (boringButton.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
} // function styleText

biggerButton.onclick = increaseFontSize;
fancyButton.onchange = styleText;
boringButton.onchange = styleText;


