

    console.log("we are here");
var today = new Date();

var hourNow = today.getHours();

var greeting;

if (hourNow > 18) {
greeting = 'Good evening!';

} else if (hourNow > 12 ) {
greeting = 'Good afternoon!';


} else if (hourNow > 0 ) {
greeting = 'Good morning!';


} else {
greeting = 'Welcome!';

}

document.write('<p>' + greeting + '</p>');




function colorize() {
    console.log("background1");

    var element = document.getElementById("header");
    element.style.backgroundColor = 'white';
    var element2 = document.getElementById("main");
    element2.style.backgroundColor = 'white';
    var element3 = document.getElementById("footer");
    element3.style.backgroundColor = 'white';
    var element4 = document.getElementById("footerLinkStyle");
    element4.style.backgroundColor = 'black';
}

function colorize2() {

    console.log("background2");

    var element = document.getElementById("header");
    element.style.backgroundColor = 'green';
    var element2 = document.getElementById("main");
    element2.style.backgroundColor = 'green';
    var element3 = document.getElementById("footer");
    element3.style.backgroundColor = 'green';
}


function myConfirmFunction() {
  var txt;
  var r = confirm("Thank you for subscribing!");
  if (r == true) {
    txt = "Email Sent";
  } else {
    txt = "You pressed Cancel!";
  }
var element = document.getElementById("emailForm");
    element.style.display = 'none';
var element2 = document.getElementById("footerLinkContainer");
    element2.style.paddingTop = '40px';

  document.getElementById("email").innerHTML = txt;
}

function myPromptFunction() {
  var person = prompt("Please enter your name", "John Doe");
  if (person != null) {
    document.getElementById("mainHeadlineSub").innerHTML =
person + " buy some amazing Anti-Corona virus plutonium pills!";
  }
}