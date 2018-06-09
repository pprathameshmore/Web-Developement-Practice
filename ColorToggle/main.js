var toggleButton = document.querySelector("button");
var isPink = false;

toggleButton.addEventListener("click", function () {

    if (isPink) {
        document.querySelector("body").style.background = "red";
        isPink = false;        
    } else {
        document.querySelector("body").style.background = "pink";
        isPink = true;
    }
});