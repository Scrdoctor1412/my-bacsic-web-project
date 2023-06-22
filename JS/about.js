let screenSize = window.matchMedia("(max-width:992px)")
console.log(screenSize)


function changeLayout(){
    if(screenSize.matches){
        let navbar = document.querySelector(".navbar .container-fluid")
        let navbarContent = document.querySelector(".navbar-nav")
        if(navbar.children.length === 4){
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

changeLayout(screenSize)
screenSize.addListener(changeLayout)
