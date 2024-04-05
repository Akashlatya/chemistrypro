//Your JavaScript goes in here
var f = 1 ;
var steps =document.querySelector("#step")
var bkr1 = document.querySelector("#img-acetic")
var bkr2 = document.querySelector("#img-butanol")
var drp1 = document.querySelector("#drop1")
var drp2 = document.querySelector("#drop2")
var drp3 = document.querySelector("#drop3")
var drp4 = document.querySelector("#drop4")
var gcylender = document.querySelector("#img-gcylndr")
var gsol = document.querySelector("#sol-gcylndr")
var solmx = document.querySelector("#img-fsol")
var finalsol = document.querySelector("#finalsol")
var cork = document.querySelector("#img-cork")
// var gcylendersol = document.querySelector("#img-gcylndr-sol")


// @@@@@@@@@@@@@@@@@@@@@@ beaker into cylender @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

bkr1.addEventListener("click",function(){
    if(f==1){
        steps.innerHTML = "click on graduated cylinder";
        bkr1.style.transform = "translate(-80%,-90%) rotate(-60deg)";
        
        setTimeout(() => {
            drp1.style.transform = "translate(0%,500%)"
            drp1.style.opacity = "0"
            
        }, 700);
       
        setTimeout(() => {
            drp1.style.visibility = "visible"
            gsol.style.opacity = "100"
        }, 900);
        
        setTimeout(() => {
            bkr1.style.transform = "translate(0%,0%) rotate(0deg)";
        }, 1500);
        
    
    }

    f+=1;
})


bkr2.addEventListener("click",function(){
    if(f==3){
        steps.innerHTML = "click on graduated cylinder";
        bkr2.style.transform = "translate(-220%,-90%) rotate(-60deg)";
        
        setTimeout(() => {
            drp2.style.transform = "translate(0%,500%)"
            drp2.style.opacity = "0"
        }, 700);
       
        setTimeout(() => {
            drp2.style.visibility = "visible"
            gsol.style.opacity = "100"
        }, 900);
        
        setTimeout(() => {
            bkr2.style.transform = "translate(0%,0%) rotate(0deg)";
        }, 1500); 
    
    }

    f=3;
})




// ############################ cylender into seperating funnel ###########################


gcylender.addEventListener("click",function(){
    if(f==2){
        steps.innerHTML = "Take 40ml 0f N-butanol into graduated cylinder";
        gcylender.style.transform = "translate(-240%,-155%) rotate(-60deg)";
        gsol.style.transform = "translate(-300%,-605%) rotate(-60deg)";


        setTimeout(() => {
            drp3.style.transform = "translate(0%,500%)"
            drp3.style.opacity = "0"
        }, 700);

        setTimeout(() => {
            drp3.style.visibility = "visible"
            gsol.style.opacity = "0"
        }, 900);

        setTimeout(() => {
            gcylender.style.transform = "translate(0%,0%) rotate(0deg)";
            gsol.style.transform = "translate(0%,0%) rotate(0deg)";
        }, 1500); 
    }

    f+=1;
})



gcylender.addEventListener("click",function(){
    if(f==4){
        steps.innerHTML = "click on seperatori funnol and sake it properly";
        gcylender.style.transform = "translate(-240%,-155%) rotate(-60deg)";
        gsol.style.transform = "translate(-300%,-605%) rotate(-60deg)";


        setTimeout(() => {
            drp4.style.transform = "translate(0%,500%)"
            drp4.style.opacity = "0"
        }, 700);

        setTimeout(() => {
            drp4.style.visibility = "visible"
            gsol.style.opacity = "0"
        }, 900);

        setTimeout(() => {
            gcylender.style.transform = "translate(0%,0%) rotate(0deg)";
            gsol.style.transform = "translate(0%,0%) rotate(0deg)";
        }, 1500); 
    }

    f+=1;
})


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ mix solution $$$$$$$$$$$$$$$$$$$

solmx.addEventListener("click",function(){
    if(f==6){
        setTimeout(() => {
            solmx.style.transform = "translate(0%,-70%)"
          }, 1000);
      
          setTimeout(() => {
            solmx.style.transform = "translate(90%,60%)"
          }, 1500);

    setTimeout(() => {
        solmx.style.transform = "translate(0%,0%)"
        solmx.style.opacity = "0"
        finalsol.style.opacity = "100"
    }, 6000);
    }
})

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

cork.addEventListener("click",function(){
    if(f==5){
        cork.style.transform = "translate(0%,-1500%)";
        setTimeout(() => {
          cork.style.transform = "translate(290%,-1500%)";
        }, 1000);
    
        setTimeout(() => {
          cork.style.transform = "translate(302%,-1250%)";
        }, 1500);
    }
    f+=1;
    go.style.visibility = "visible"
})