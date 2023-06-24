let screenSize = window.matchMedia("(max-width:992px)")
console.log(screenSize)


function changeLayout(){
    if(screenSize.matches){
        let navbar = document.querySelector(".navbar .container-fluid")
        let navbarContent = document.querySelector(".navbar-nav")
        if(navbar.children.length === 4){
            navbar.children[3].remove()
        }
        navbarContent.innerHTML += "<button class=\"nav-contact-btn\" onclick=\"location.href='login.html'\" id=\"contact-btn\">LOG IN</button>"
    }else{
        let navbar = document.querySelector(".navbar .container-fluid")
        let navbarContent = document.querySelector(".navbar-nav")
        navbarContent.innerHTML = "<a class=\"nav-link\" aria-current=\"page\" href=\"about.html\">ABOUT</a>" + 
        "<a class=\"nav-link\" href=\"marketplace.html\">MARKETPLACE</a>" + 
        "<a class=\"nav-link\" href=\"community.html\">COMMUNITY</a>" + 
        "<a class=\"nav-link\" href=\"support.html\">SUPPORT</a>"
        navbar.innerHTML += "<button class=\"nav-contact-btn\" onclick=\"location.href='login.html'\" id=\"contact-btn\">LOG IN</button>"
    }
    changePostHeading()
    changeQuestionContent()
}


function changePostHeading(){
    
    if(screenSize.matches){
        let tempPostHeading = document.querySelector(".post-heading")
        console.log(tempPostHeading.children)
        if(tempPostHeading.children.length>=5){
            tempPostHeading.children[1].remove()
            tempPostHeading.children[2].remove()
            tempPostHeading.children[1].remove()
        }
        tempPostHeading.children[0].setAttribute('class',"col-12 text-center")
        if(tempPostHeading.children.length === 2){
            tempPostHeading.children[1].remove()
        }
        tempPostHeading.innerHTML += "<hr>"
    }else{
        let tempPostHeading = document.querySelector(".post-heading")
        tempPostHeading.children[0].setAttribute('class',"col-5 text-center")
        if(tempPostHeading.children.length <= 2){
            tempPostHeading.children[1].remove()    //remove hr tag
            tempPostHeading.innerHTML += "<div class=\"col-2 text-center\">VIEWS</div>" + 
            "<div class=\"col-2 text-center\">POSTS</div> "+ 
            "<div class=\"col-3 \">LAST POSTS</div>" + 
            "<hr>"
        }
    }
}

function createMyString(content1,content2){
    let myStr = "<div class=\"col-2 text-center\">1</div>" +
    "<div class=\"col-2 text-center\">1</div>" + 
    "<div class=\"col-3\">" + 
      "<p>by <a href=\"user-profile.html\"> " + `${content1}` + "</a> </p>" + 
      "<p>"+`${content2}` + "</p>" + 
    "</div>"
    return myStr
}



let quesCont = document.querySelectorAll(".ques-content")
let userName = []
let datePost = []
for(let i=0;i<quesCont.length;i++){
    userName.push(quesCont[i].children[3].children[0].innerText)
    datePost.push(quesCont[i].children[3].children[1].innerText)
}

function changeQuestionContent(){
    if(screenSize.matches){
        let tempQuesCont = document.querySelectorAll(".ques-content")
        for(let i=0;i<tempQuesCont.length;i++){
            if(tempQuesCont[i].children.length>=4){
                tempQuesCont[i].children[1].remove()
                tempQuesCont[i].children[2].remove()
                tempQuesCont[i].children[1].remove()
            }
            tempQuesCont[i].children[0].setAttribute('class',"col-12 d-flex")
        }
        
    } else{
        let tempQuesCont = document.querySelectorAll(".ques-content")
        for(let i=0;i<tempQuesCont.length;i++){
            tempQuesCont[i].children[0].setAttribute('class',"col-5 d-flex")
            if(tempQuesCont[i].children.length<=1){
                tempQuesCont[i].innerHTML += createMyString(userName[i], datePost[i])  
            }
        }
    }
}

changeLayout(screenSize)
screenSize.addListener(changeLayout)

