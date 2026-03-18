// Eric Cheyssial | CSC 193A | Assignment 5

// Button references.
const biggerButton = document.querySelector("#biggerButton");
const mooButton = document.querySelector("#mooButton");

// Radio button references.
const fancyButton = document.querySelector("#fancyShmancy");
const boringButton = document.querySelector("#boringBetty");

// HTML textarea reference.
const textArea = document.getElementById("userText");

// Original alert for "Bigger!" click.
function alertBiggerClicked() {    
    alert("Hello, world!");
} // function alertBiggerClicked

function modifyFontSize() {
    textArea.style.fontSize = "24pt";
} // function increaseFontSize

function modifyCaseAndSuffix() {
    // Convert text input to all caps.
    textArea.value = textArea.value.toUpperCase();

    // Append suffix "Moo" to last word of each sentence.
    var str = textArea.value;
    var parts = str.split(".");
    str = parts.join("-Moo");

    textArea.value = str;
} // function modifyCase

function styleText() {
    // Assess whether "FancyShmancy" was checked, apply styling.
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

// Button click events.
biggerButton.onclick = modifyFontSize;
mooButton.onclick = modifyCaseAndSuffix;

// Radio button check events.
fancyButton.onchange = styleText;
boringButton.onchange = styleText;


