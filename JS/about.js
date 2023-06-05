let aboutOptHeadingComp = ["Who We Are","Our Leaders","Smarter Technology For All","Diversity & inclusion","Susatinablity"]
let aboutOptDescComp = ["We think and act differently","Delivering on commitment","Transforming the world, intelligently","Different is out biggest strength","Striving to improve our planet"]

let aboutOptHeadingsEvt = ["Consumer Electrics Show","Mobile World Congress","Lenovo Tech World","Tech Life / IFA","Web Summit"]
let aboutOptDescEvt = ["Vegas trade show of new sonsumer tech","World's largest show of mobile tech","Lenovo's virtual technology innovation conference","Europe's largest consumer tech show","World's largest technology conference"] 

let evtChoices = document.querySelectorAll(".changeOpt")

for(let choice of evtChoices){
    choice.addEventListener('click',function(){
        let aboutOptImg = document.querySelectorAll(".card>img")
        let aboutOptHeadings = document.querySelectorAll(".card>.card-body h3")
        let aboutOptDesc = document.querySelectorAll(".card>.card-body p")
        for(let i=0;i<5;i++){
            // Image
            if(i==0 && choice.rel == "company")
                aboutOptImg[i].setAttribute('src',`image/about-page/${choice.rel}-${i+1}.webp`)
            else
                aboutOptImg[i].setAttribute('src',`image/about-page/${choice.rel}-${i+1}.avif`)
            // Text below image
            if(choice.rel == "company"){
                aboutOptDesc[i].innerText = aboutOptDescComp[i]
                aboutOptHeadings[i].innerText = aboutOptHeadingComp[i]
            }else if(choice.rel == "event"){
                aboutOptDesc[i].innerText = aboutOptDescEvt[i]
                aboutOptHeadings[i].innerText = aboutOptHeadingsEvt[i]
            }
        }
    })
    
}