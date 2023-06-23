let commBtn = document.querySelector('#ask-community')
commBtn.addEventListener('click',function(){
    location.href = 'community.html'
})

let screenSize = window.matchMedia("(max-width:992px)")


function swapContentLayout(bool){
    if(bool){
        let contentBlock = document.querySelector(".content-block")
        contentBlock.innerHTML = "<div class=\"col-lg-7 text-center knowledge-base-img\">" +
        "<img src=\"image/support image/15de66b4-8e19-4194-88d4-9149c9bdfa2a_knowledge_base.jpg\" alt=\"\" style=\"width: 437px;height: 437px;\" class=\"img-fluid\">" +
      "</div>" +
      "<div class=\"col-lg-5 knowledge-base\">" +
        "<h3>Knowledge Base</h3>" +
        "<p>A collection of frequently asked questions around ordering, product setup, software debugging, and troubleshooting.</p>" +
        "<hr>" +
        "<a href=\"#0\">Pre-orders</a>" +
        "<hr>" + 
       " <a href=\"#0\">Account & Profile</a>" + 
        "<hr>" +
        "<a href=\"#0\">Products</a>" +
        "<hr>" +
      "</div>";
      
    }else{
        let contentBlock = document.querySelector(".content-block")
        contentBlock.innerHTML = 
      "<div class=\"col-lg-5 knowledge-base\">" +
        "<h3>Knowledge Base</h3>" +
        "<p>A collection of frequently asked questions around ordering, product setup, software debugging, and troubleshooting.</p>" +
        "<hr>" +
        "<a href=\"pre-order.html\">Pre-orders</a>" +
        "<hr>" + 
       " <a href=\"acc-and-profile.html\">Account & Profile</a>" + 
        "<hr>" +
        "<a href=\"support-product.html\">Products</a>" +
        "<hr>" +
      "</div>"+ 
      "<div class=\"col-lg-7 text-center knowledge-base-img\">" +
        "<img src=\"image/support image/15de66b4-8e19-4194-88d4-9149c9bdfa2a_knowledge_base.jpg\" alt=\"\" style=\"width: 437px;height: 437px;\" class=\"img-fluid\">" +
      "</div>";
    }
}

function changeLayout(){
    let bool = screenSize.matches
    if(bool){
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
    swapContentLayout(bool)
}

changeLayout(screenSize)
screenSize.addListener(changeLayout)
