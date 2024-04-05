// -----------------------------------------------------------------------  variables---------------------------------------------------------------------               

var f = 0;
var steps = document.querySelector("#step")
var pflask1 = document.querySelector("#pink1")
var pflask2 = document.querySelector("#pink2")
var orgl = document.querySelector("#orgflsk");
var aql = document.querySelector("#flask2")
var drp1 = document.querySelector("#drop")

// ********************************************************************** titration1 **********************************************************************

function titration1() {
  if (f == 0) {
    steps.innerHTML = "click on burate's knob to release NAOH";
    console.log(f);
    orgl.style.transform = "translate(550%,0%) ";

  }
  f = +1;
}

function titrate() {
  if (f == 1) {
    steps.innerHTML = "click on organic layer filled conical flask  and titrate";
    drp1.style.visibility = "visible"
    drp1.style.transform = "translate(0%,700%) ";

    setTimeout(() => {
      drp1.style.visibility = "hidden"
    }, 200);

    setTimeout(() => {
      drp1.style.transform = "translate(0%,0%)"
    }, 1000);

    setTimeout(() => {
      pflask1.style.opacity = "20%"
      pflask1.style.opacity = "60%"
      pflask1.style.opacity = "100%"
      orgl.style.visibility = "hidden";

    }, 4000);

  }

}
function pink1() {
  pflask1.style.transform = "translate(-550%,0%)";

  f = +1
}

// ********************************************************************** titration2 **********************************************************************

function titration2() {
  if (f == 1) {
    steps.innerHTML = "click on burate's knob to release NAOH";
    aql.style.transform = "translate(378%,0%) ";
    setTimeout(() => {
      pflask2.style.opacity = "20%"
      pflask2.style.opacity = "60%"
      pflask2.style.opacity = "100%"
      aql.style.visibility = "hidden";

    }, 6000);

  }
  
}

function pink2() {
  pflask2.style.transform = "translate(-378%,0%)";


  f = +1
}

