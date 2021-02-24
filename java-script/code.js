var confirm = ("hello user plz if u want to complet enter yes");
var person = prompt("Please enter your name");

// compare your values 
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
// change name 
function changename() {

var name =document.getElementById("color").style.color = "red";
}
 // display your name 
function getusername() {
  if (person != null) {
    document.getElementById("getname").innerHTML = "have fun " + person + "! plz visit us again?";
}
}
// function will change the image
function changeImage() {

  if (document.getElementById("imgClickAndChange").src == "https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY=") 
  {
      document.getElementById("imgClickAndChange").src = "https://www.diabete.qc.ca/wp-content/uploads/2014/08/Les-fruits-768x768.png";
  }
  else 
  {
      document.getElementById("imgClickAndChange").src = "https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg";
  }
}

