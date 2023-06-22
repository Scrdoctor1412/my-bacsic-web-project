let sideBar = document.querySelector(".sidebar")
let sideBarAll = document.querySelector(".sidebar-all")
let tempSideBar = sideBar.innerHTML
let hamButton = document.querySelector(".navbar-nav")
let tempHamButton = hamButton.innerHTML
let screenSize = window.matchMedia("(max-width:992px)")
console.log(hamButton)
console.log(sideBarAll.children)
function changeLayout(x){
    if(x.matches){
        hamButton.innerHTML += "<ul class=\"sidebar\">" + sideBar.innerHTML + "</ul>"
        sideBar.innerHTML = ""
        changingProducts()
    }else{
        sideBar.innerHTML = tempSideBar
        hamButton.innerHTML = tempHamButton
        changingProducts()
    }
}

changeLayout(screenSize)
screenSize.addListener(changeLayout)


function changingProducts(){
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



