let sideBar = document.querySelector(".sidebar")
let tempSideBar = sideBar.innerHTML
let hamButton = document.querySelector(".navbar-nav")
let tempHamButton = hamButton.innerHTML
let screenSize = window.matchMedia("(max-width:992px)")
console.log(hamButton)

function changeLayout(x){
    if(x.matches){
        hamButton.innerHTML += sideBar.innerHTML
        sideBar.innerHTML = ""
    }else{
        sideBar.innerHTML = tempSideBar
        hamButton.innerHTML = tempHamButton
    }
}

changeLayout(screenSize)
screenSize.addListener(changeLayout)