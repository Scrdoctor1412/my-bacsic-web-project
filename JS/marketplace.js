

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
          "<span class=\"badge bg-primary rounded-pill\">6</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-3.html\" rel=\"keyboard\">Keyboards</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">6</span>" + 
        "</li>" + 
        "<li class=\"list-group-item d-flex justify-content-between align-items-center\">" + 
          "<a href=\"marketplace-4.html\" rel=\"memory\">Memory & Storage</a>" + 
          "<span class=\"badge bg-primary rounded-pill\">6</span>" + 
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
   
    changingProducts()
}

changeLayout(screenSize)
screenSize.addListener(changeLayout)


function changingProducts(){
    let sideBar = document.querySelector(".sidebar")
    for(let i=2;i<=5;i++){
        let categories = sideBar.children[i].children[0]
        categories.addEventListener('click',function(){
            let cardImg = document.querySelectorAll(".card")
            let headings = document.querySelector("#cat-headings")
            let dotTail = ""
            if(categories.rel === "laptop"){
                dotTail = "png"
                headings.innerHTML = "Thinkpad Laptop"
            }else if(categories.rel === "mainboard"){
                dotTail = "jpg"
                headings.innerHTML = "Mainboards"
            }else if(categories.rel === "keyboard"){
                dotTail = "avif"
                headings.innerHTML = "Thinkpad Keyboards"
            }else if(categories.rel === "memory"){
                dotTail = "webp"
                headings.innerHTML = "Memories and Storage"
            }
            for(let j=0;j<cardImg.length;j++){
                cardImg[j].children[0].setAttribute('src',`image/marketplace/${categories.rel}-1.${dotTail}`)
            }
        })
    
    }
}



