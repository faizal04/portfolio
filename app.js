// Get references to the elements to be toggled
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");


// Show the "about" element when the window loads
window.addEventListener("load", function () {
    toggleDisplay(p1);
});

// Add event listeners to the buttons
document.getElementById("about").addEventListener("click", function () {
    toggleDisplay(p1);
});

document.getElementById("beginning").addEventListener("click", function () {
    toggleDisplay(p2);
});

document.getElementById("first").addEventListener("click", function () {
    toggleDisplay(p3);
});

document.getElementById("career").addEventListener("click", function () {
    toggleDisplay(p4);
});

// Function to toggle the display of an element and hide all others
function toggleDisplay(elementToShow) {
    var elementsToHide = [p1, p2, p3, p4];

    elementsToHide.forEach(function (element) {
        if (element != elementToShow) {
            element.style.display = 'none';
        }
    });

    if (elementToShow.style.display == "block") {
        elementToShow.style.display = "none";
    }
    else {
        elementToShow.style.display = "block";
    }
}
