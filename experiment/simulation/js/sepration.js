//Your JavaScript goes in here
var flag = 1
var steps = document.querySelector("#step")
var drop = document.querySelector("#drp")
var pipet1 = document.querySelector("#ppt1")
var pipet2 = document.querySelector("#ppt2")
var orgflask = document.querySelector("#org-flask")
var aqusflask = document.querySelector("#aqus-flask")
var emtflask1 = document.querySelector("#emt-flask1")
var emtflask2 = document.querySelector("#emt-flask2")
var knob = document.querySelector("#knob")
var sepfunnol = document.querySelector("#sep-funnol")
var Dwater = document.querySelector("#dwater")


function speaks() {
    const utterance = new SpeechSynthesisUtterance(steps.innerHTML);
    speechSynthesis.speak(utterance);
}

setTimeout(() => {
    speaks();
}, 2000);


pipet1.addEventListener("click", function () {
    if (flag == 1) {
        steps.innerHTML = "click on conical flask";
        pipet1.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet1.style.transform = " translate(0%,-4000%) rotate(90deg)"
        }, 1000);


        setTimeout(() => {
            pipet1.style.transform = " translate(105%,-4000%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet1.style.transform = "translate(105%,-3200%) rotate.(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet1.style.transform = "translate(105%,-4000%) rotate(90deg)"
        }, 5000);


        setTimeout(() => {
            pipet1.style.transform = "translate(340%,-4000%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet1.style.transform = "translate(340%,-900%) rotate(90deg)"
        }, 7000);


        setTimeout(() => {
            emtflask2.style.opacity = "0"
            orgflask.style.opacity = "100"
            pipet1.style.opacity = "0"
            speaks();
        }, 8000);

    }
 

    flag += 1;
})




emtflask1.addEventListener("click", function () {
    if (flag == 2) {
        steps.innerHTML = "click on knob of seperating funnol to take out 5ml of aquese layer of solution";
        emtflask1.style.transform = "translate(-257%,0%)"
        speaks();
    }
    flag += 1;
})


knob.addEventListener("click", function () {
    if (flag == 3) {
        steps.innerHTML = "click on pipet and add 5ml of water in each conical flask";
        drop.style.opacity = "100"
        drop.style.transform = "translate(0%,400%) ";

        setTimeout(() => {
            drop.style.opacity = "0"
        }, 400);

        setTimeout(() => {
            drop.style.transform = "translate(0%,0%)"
            emtflask1.style.opacity = "0";
            aqusflask.style.opacity = "100"
        }, 1000);

        setTimeout(() => {
            aqusflask.style.transform = "translate(257%,0%)"
        }, 2000);

        setTimeout(() => {
            sepfunnol.style.opacity = "0"
            Dwater.style.opacity = "100"
            pipet2.style.opacity = "100"
            speaks();
        }, 3000);

    }
   
    flag += 1
})



pipet2.addEventListener("click", function () {
    if (flag == 4) {

        pipet2.style.transform = " rotate(90deg)"

        setTimeout(() => {
            pipet2.style.transform = " translate(0%,-2000%) rotate(90deg)"
        }, 1000);

        setTimeout(() => {
            pipet2.style.transform = " translate(110%,-2000%) rotate(90deg)"
        }, 2000);

        setTimeout(() => {
            pipet2.style.transform = "translate(110%,-700%) rotate(90deg)"
        }, 3000);

        setTimeout(() => {
            pipet2.style.transform = "translate(110%,-2000%) rotate(90deg)"
        }, 5000);

        setTimeout(() => {
            pipet2.style.transform = "translate(255%,-2000%) rotate(90deg)"
        }, 6000);

        setTimeout(() => {
            pipet2.style.transform = "translate(255%,-700%) rotate(90deg)"
        }, 7000);

        setTimeout(() => {
            pipet2.style.transform = "translate(255%,-2000%) rotate(90deg)"
        }, 8000);

        setTimeout(() => {
            pipet2.style.transform = "translate(110%,-2000%) rotate(90deg)"
        }, 9000);

        setTimeout(() => {
            pipet2.style.transform = "translate(110%,-700%) rotate(90deg)"
        }, 10000);

        setTimeout(() => {
            pipet2.style.transform = "translate(110%,-2000%) rotate(90deg)"
        }, 11000);

        setTimeout(() => {
            pipet2.style.transform = "translate(340%,-2000%) rotate(90deg)"
        }, 12000);

        setTimeout(() => {
            pipet2.style.transform = "translate(340%,-700%) rotate(90deg)"
        }, 13000);
       
        setTimeout(() => {
            pipet2.style.opacity = "0"
            go.style.visibility = "visible"
        }, 14000);

    }
   
    flag += 1;
})
