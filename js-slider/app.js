const images = ['images/pic-1.jpg','images/pic-2.jpg','images/pic-3.jpg','images/pic-4.jpg','images/pic-5.jpg','images/pic-6.jpg','images/pic-7.jpg','images/pic-8.jpg','images/pic-9.jpg']

let imageIndex = 0;
const imageElement = document.querySelector('img')

setInterval(()=>{
    if(imageIndex>=images.length){
        imageIndex=0
    }
    let imagesUrl = images[imageIndex]
    imageElement.setAttribute('src', imagesUrl)
    imageIndex++;
    
},1000)