var gamestatys = confirm("are you ready to play our game that will show you the best four pictuers in your favorite season   ")
var userinput = prompt("what is the most thing you love between these {Summer ,Spring, Winter , Fall}");
var picturerepet = prompt("how many time you want to see picture");

if (gamestatys == true)
{
    if (userinput == "Summer"){
    document.write("summer is my best season too");
     Seasonsummer();
   } else if (userinput == "Spring") {
    document.write("Spring is my best season too");
    SeasonSpring();
   } else if (userinput == "Winter") {
    document.write("Winter is my best season too");
    SeasonSpring();
   } else if (userinput == "Fall"){
    document.write("Fall is my best season too");
    SeasonSpring();
   } else {
    prompt("pleas enter valid input");
   }
   document.write("THANK YOU FOR VISTING US ");
}else{
document.write("please Check our game when you are ready")
}

function Seasonsummer (){
    for(var i = 0 ; i < picturerepet; i++)
    document.write("<img src='https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg'/>");
}
function SeasonSpring (){
    for(var i = 0 ; i < picturerepet; i++)
    document.write("<img src='https://i.pinimg.com/originals/fe/86/f0/fe86f02b71f874250766bab7286e3567.jpg'/>");
}
function SeasonWinter (){
    for(var i = 0 ; i < picturerepet; i++)
    document.write("<img src='https://roxburyreview.com/wp-content/uploads/2019/12/download.jpeg'/>");
}
function SeasonFall (){
    for(var i = 0 ; i < picturerepet; i++)
    document.write("<img src='https://www.gannett-cdn.com/-mm-/5cf927a8f374fc3215b74d9b57793c2bb203f260/c=0-36-725-446/local/-/media/2017/11/16/Louisville/Louisville/636464311881599711-Fall-Leaves-4-.jpg'/>");
}
