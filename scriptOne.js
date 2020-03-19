function myPassword() {
    var x = document.getElementById("myPass").value;
    if (x == 'open'){
        console.log("we got the name");
        document.getElementById("passwordDiv2").style.visibility = 'visible';
        document.getElementById("passwordDiv").style.visibility = 'hidden';
    } else {
        document.getElementById("checker").innerHTML = "Try again; it's not \'"+ x + "'";
    }
  }

  function justDance() {
    var x = document.getElementById("peps").value;
    var y = 0;
    if (x > 0 || x <= 100){

        for (let i = 0; i < x ; i++){
            
            console.log("one iteration");
            y++;

        }

        document.getElementById("bottles").innerHTML = "We have more than "+ y + " bottles!";
        document.getElementById("keyButton").style.visibility = 'visible';

    }  else {
        document.getElementById("bottles").innerHTML = "We will figure it out!";
        document.getElementById("keyButton").style.visibility = 'visible';

    }
    

   
  }


  function letMeInAlready(){
        document.getElementById("wrapperDiv").style.visibility = 'visible';
        document.getElementById("nav").style.visibility = 'visible';
        document.getElementById("passwordDiv").style.display = 'none';
        document.getElementById("passwordDiv2").style.display = 'none';

  }


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