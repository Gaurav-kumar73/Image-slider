let slides = document.querySelectorAll(".slide")
let counter = 0

slides.forEach((item,index)=>{
    item.style.left = `${index*100}%`
})

function goprev(){
    counter--
    imageslide()
}

function gonext(){
    counter++
    imageslide()
    
}

const imageslide = () => {
    slides.forEach((item,index)=>{
        item.style.transform = `translateX(-${counter*100}%)`
    })
}