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
    changeLayout()
    displayCarousel()
    console.log(carousel)
}

function displayCarousel(){
    if(screenSize.matches){
        let tempCarousel = document.querySelector(".slide")
        tempCarousel.innerHTML = ""
    }else{
        let tempCarousel = document.querySelector(".slide")
        if(tempCarousel.children.length===0){
           tempCarousel.innerHTML += carousel 
        }  
    }
}

function changeLayout(){
    if(screenSize.matches){
        let navbar = document.querySelector(".navbar .container-fluid")
        let navbarContent = document.querySelector(".navbar-nav")
        if(navbar.children.length!==3){
          navbar.children[3].remove()
        }
        navbarContent.innerHTML += "<button class=\"nav-contact-btn\" onclick=\"location.href='support-form.html'\" id=\"contact-btn\">CONTACT US</button>"
    }else{
        let navbar = document.querySelector(".navbar .container-fluid")
        let navbarContent = document.querySelector(".navbar-nav")
        navbarContent.innerHTML = "<a class=\"nav-link\" aria-current=\"page\" href=\"about.html\">ABOUT</a>" + 
        "<a class=\"nav-link\" href=\"marketplace.html\">MARKETPLACE</a>" + 
        "<a class=\"nav-link\" href=\"community.html\">COMMUNITY</a>" + 
        "<a class=\"nav-link\" href=\"support.html\">SUPPORT</a>"
        navbar.innerHTML += "<button class=\"nav-contact-btn\" onclick=\"location.href='support-form.html'\" id=\"contact-btn\">CONTACT US</button>"
    }
}

let carousel = document.querySelector(".slide").innerHTML
let screenSize = window.matchMedia("(max-width:992px)");
console.log(screenSize)
chgLearnMoreContent(screenSize)
screenSize.addListener(chgLearnMoreContent)



