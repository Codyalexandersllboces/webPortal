/*
    Students Name: Cody Alexander
    File name: script.js
    Date: date
*/
//Hamburger menu function

// golobal varibals
var video = document.getElementById("example")
var videoSource = document.getElementById("vid-src")
var descriptionSource =
document.getElementById("despsrc")

// Function to displays burpies example video
function brupees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt;"
    video.style.display = "block";
    video.load();
}
//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-description.vtt";
    video.style.display = "block";
    video.load();
}
//Function to display the plank example video
function mountian() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-description.vtt";
    video.style.display = "block";
    video.load();
}

function hamburger () {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
    
}


