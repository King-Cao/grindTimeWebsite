let password; 
let pass1 = "theGrindingElite123"

password = prompt("Please enter the password to view this page!");

if (password == pass1) {
    alert("Password Correct! Click OK to enter!");
} else {
    window.location = "http://www.dhmo.org/"
}