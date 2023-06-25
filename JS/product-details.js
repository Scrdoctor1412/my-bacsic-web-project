let bigImage = document.querySelector("#big-image")
let smallImages = document.querySelectorAll("#small-image li a")
for(let i=0;i<smallImages.length;i++){
    smallImages[i].addEventListener('click',function(){
        let newSrc = smallImages[i].children[0].src
        bigImage.setAttribute('src',newSrc)
    })
}

let screenSize = window.matchMedia("(max-width:992px)")

function changeLayout(){
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
      if(loginBtn.children.length === 2 && cartBtn.children.length === 2){
        loginBtn.children[1].remove()
        cartBtn.children[1].remove()
      }
    }
}

changeLogCart()
screenSize.addListener(changeLayout)

let addToCartBtn = document.querySelector(".right-side>button")
addToCartBtn.addEventListener('click',function(){
  location.href = "./cart.html"
})