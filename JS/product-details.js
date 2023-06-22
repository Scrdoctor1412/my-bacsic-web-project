let bigImage = document.querySelector("#big-image")
let smallImages = document.querySelectorAll("#small-image li a")
console.log(smallImages[0].children[0])
for(let i=0;i<smallImages.length;i++){
    smallImages[i].addEventListener('click',function(){
        let newSrc = smallImages[i].children[0].src
        bigImage.setAttribute('src',newSrc)
    })
}