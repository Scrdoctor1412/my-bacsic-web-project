

let screenSize = window.matchMedia("(max-width:992px)")

function changeLayout(x){
    if(x.matches){
        let sideBarAll= document.querySelector(".sidebar-all")
        let navbarContent = document.querySelector(".navbar-nav")
        if(sideBarAll.children.length!==0){
          sideBarAll.children[0].remove()  
        }
        navbarContent.innerHTML += "<ul class=\"sidebar\">" +
        "<hr>" + 
       
        "<p style=\"font-weight: bold;\">Categories</p>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace.html\" rel=\"laptop\">Thinkpad laptop</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">6</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-2.html\" rel=\"mainboard\">Mainboards</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">1</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-3.html\" rel=\"keyboard\">Keyboards</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">1</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-4.html\" rel=\"memory\">Memory & Storage</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">2</span>" + 
        "</li>" + 
        "<hr>" + 
      "</ul>" ;
      
        
    }else{
        let sideBarAll= document.querySelector(".sidebar-all")
        console.log(sideBarAll.children)
        let navbarContent = document.querySelector(".navbar-nav")
        navbarContent.innerHTML = "<a class=\"nav-link\" aria-current=\"page\" href=\"about.html\">ABOUT</a>" +
        "<a class=\"nav-link\" href=\"marketplace.html\">MARKETPLACE</a>" +
        "<a class=\"nav-link\" href=\"community.html\">COMMUNITY</a>" +
        "<a class=\"nav-link\" href=\"support.html\">SUPPORT</a>";

        sideBarAll.innerHTML += "<ul class=\"list-group sidebar\">" +
        "<hr>" + 
       
        "<p style=\"font-weight: bold;\">Categories</p>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace.html\" rel=\"laptop\">Thinkpad laptop</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">6</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-2.html\" rel=\"mainboard\">Mainboards</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">1</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-3.html\" rel=\"keyboard\">Keyboards</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">1</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-4.html\" rel=\"memory\">Memory & Storage</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">2</span>" + 
        "</li>" + 
        "<hr>" + 
      "</ul>" ;
        
    }
    changeLogCart()
}

function changeLogCart(){
  if(screenSize.matches){
    let loginBtn = document.querySelector("#login-btn")
    let cartBtn = document.querySelector("#cart-btn")
    loginBtn.innerHTML += "<span> Login </span>"
    cartBtn.innerHTML += "<span> Shopping cart </span>"
  }else{
    let loginBtn = document.querySelector("#login-btn")
    let cartBtn = document.querySelector("#cart-btn")
    console.log(cartBtn + " " + loginBtn)
    if(loginBtn.children.length === 2 && cartBtn.children.length === 2){
      loginBtn.children[1].remove()
      cartBtn.children[1].remove()
    }
  }
}


changeLayout(screenSize)
screenSize.addListener(changeLayout)





