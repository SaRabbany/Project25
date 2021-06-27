let imgElements = document.querySelectorAll('.slideImages img');
// let x = 0
// let images = ['images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg']
function slider(){
        // if(x == 5){
        //     return x = 0
        // }
        // else{
        //     imgElements.src = images[x]
        //     return x++
        // }    
        


        if(imgElements[0].classList.contains('img-active')){
            imgElements[0].classList.remove('img-active')
            imgElements[1].classList.add('img-active')
        }
        else if(imgElements[1].classList.contains('img-active')){
            imgElements[1].classList.remove('img-active')
            imgElements[2].classList.add('img-active')
        }
        else if(imgElements[2].classList.contains('img-active')){
            imgElements[2].classList.remove('img-active')
            imgElements[3].classList.add('img-active')
        }
        else if(imgElements[3].classList.contains('img-active')){
            imgElements[3].classList.remove('img-active')
            imgElements[4].classList.add('img-active')
        }
        else if(imgElements[4].classList.contains('img-active')){
            imgElements[4].classList.remove('img-active')
            imgElements[0].classList.add('img-active')
        }
        else if(imgElements[5].classList.contains('img-active')){
            imgElements[5].classList.remove('img-active')
            imgElements[0].classList.add('img-active')
        }
        else if(imgElements[7].classList.contains('img-active')){
            imgElements[7].classList.remove('img-active')
            imgElements[0].classList.add('img-active')
        }
    
}
setInterval(slider, 3000)

