//Dark & Light Mode
document.getElementById("darkmode").onclick = function() {darkMode()};

function darkMode() {
    var dark = document.body;

    dark.classList.toggle("dark-mode");
}



// // document.getElementById("darkmode").onclick = function() {darkMode()};

// function myFunction() {
//   document.body.style.backgroundColor = "red";
// }


//  popup for upload images 
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


function hello(){  
    alert("hello javatpoint user");  
}