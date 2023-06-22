function chgLearnMoreContent(x){
    let content = document.querySelector(".learn-more")
    if(x.matches){
        content.innerHTML = " <img src=\"image\/lenovolap1.webp\" alt=\"\" class=\"img-fluid ms-lg-auto col-lg-8 col-sm-12 \"> " + " <div class=\"learn-more1 col-lg-4 col-sm-12 text-lg-left mt-0\"> " +
        "<h2>X1 Carbon Gen 11 (14\" Intel) </h2> " +
        "<ul>" + 
         " <li>Certified Intel®Evo™ with up to 13th Gen Intel® Core™ vPro® CPU</li> " + 
          "<li>Ultralight starting weight of just 1.12kg / 2.48lb</li>" + 
          "<li>Super-responsive with twice the memory as previous gen</li>" +
        "</ul>"+
        "<button onclick=\"location.href='marketplace.html'\">ORDER NOW</button>" +
        " </div> "
        
    }else{
        content.innerHTML =  " <div class=\"learn-more1 col-lg-4 col-sm-12 text-lg-left mt-0\"> " +
        "<h2>X1 Carbon Gen 11 (14\" Intel) </h2> " +
        "<ul>" + 
         " <li>Certified Intel®Evo™ with up to 13th Gen Intel® Core™ vPro® CPU</li> " + 
          "<li>Ultralight starting weight of just 1.12kg / 2.48lb</li>" + 
          "<li>Super-responsive with twice the memory as previous gen</li>" +
        "</ul>"+
        "<button onclick=\"location.href='marketplace.html'\">ORDER NOW</button>" +
        " </div> " +
        " <img src=\"image\/lenovolap1.webp\" alt=\"\" class=\"img-fluid ms-lg-auto col-lg-8 col-sm-12 \"> "
       
    }
}

let screenSize = window.matchMedia("(max-width:992px)");
console.log(screenSize)
chgLearnMoreContent(screenSize)
screenSize.addListener(chgLearnMoreContent)