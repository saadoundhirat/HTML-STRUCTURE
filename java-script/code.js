var confirm = ("hello user plz if u want to complet enter yes");
var person = prompt("Please enter your name");


function compare() {
  var value1 = parseInt(document.getElementById("box3").value);
  var value2 = parseInt(document.getElementById("box4").value);
  var display = document.getElementById("box5");
  if (value1 == 0 || value2 == 0) {
    display.value = "You have entered zero";
  } else if (value1 == value2) {
    display.value = "The numbers are the same";
  } else if (value1 % value2 == 0) {
    display.value = "The first is divisible by the second";
  } else if (value2 % value1 == 0) {
    display.value = "The second is divisible by the first";
  } else {
    display.value = "They are not divisible";
  }

}

function changename() {

var name =document.getElementById("color").style.color = "red";
}

function getusername() {
  //var person = prompt("Please enter your name");
  if (person != null) {
    document.getElementById("getname").innerHTML = "have fun " + person + "! plz visit us again?";
}
}