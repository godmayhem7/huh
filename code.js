document.querySelector("#adder").addEventListener("click",()=>{
    document.querySelector(".stats").innerHTML++
    
})

document.querySelector("#minuser").addEventListener("click",()=>{
    if(document.querySelector(".stats").innerHTML>0){
        document.querySelector(".stats").innerHTML--
    }else{
        return null
    }
    
    
})

document.querySelector("#btn-add-to-cart").addEventListener("click",()=>{
    if(document.querySelector(".stats").innerHTML>0){
        document.querySelector(".cart-items-number").style.display="flex"
        document.querySelector(".cart-items-number").innerHTML = document.querySelector(".stats").innerHTML
        document.querySelector(".stats").innerHTML=0
    }else{
        return null
    }

})


document.querySelector("#cart").addEventListener("click",()=>{
    document.querySelector("#cart-items").classList.toggle("cart-items")
    document.querySelector("#cart-items").classList.toggle("legendary-display")
    if (document.querySelector(".cart-items-number").innerHTML>0){
     document.querySelector("#times").innerHTML = document.querySelector(".cart-items-number").innerHTML
     document.querySelector("#price").innerHTML = "$"+document.querySelector(".cart-items-number").innerHTML*125.00
    }else{
       document.querySelector("h6").classList.toggle("legendary-display")
       document.querySelector("#items").classList.toggle("legendary-display")
       document.querySelector("#items").classList.toggle("items")
    }
})

document.querySelector("#delete").addEventListener("click",()=>{
    document.querySelector("#items").style.display="none"
    document.querySelector("h6").style.display="block"
    document.querySelector(".cart-items-number").innerHTML = null
})



// document.querySelector("#next").addEventListener("click",()=>{
//     document.querySelector(".image-products").style.transform="translateX(-227px)"
//     document.querySelector(".image-products").style.transition="2s"
// })

// document.querySelector("#prev").addEventListener("click",()=>{
//     document.querySelector(".image-products").style.transform="translateX(227px)"
//     document.querySelector(".image-products").style.transition="2s"
// })

let productImge = document.querySelector("#product-img");
let thumbnails = document.querySelectorAll(".thumbnails");

let images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]

thumbnails.forEach((thumb)=>{
    thumb.addEventListener("click",function(){
        if (this===thumbnails[0]){
           productImge.setAttribute("src",images[0]) 
        }else if(this===thumbnails[1]){
            productImge.setAttribute("src",images[1])
        }else if(this===thumbnails[2]){
            productImge.setAttribute("src",images[2])
        }else if(this===thumbnails[3]){
            productImge.setAttribute("src",images[3])
        }
    })
})

let mgThumbnails = document.querySelectorAll(".mg-thumbnails");

let mgc = document.querySelector(".mg");

mgThumbnails.forEach((mg)=>{
    mg.addEventListener("click",function(){
        if (this === mgThumbnails[0]){
            mgc.setAttribute("src",images[0])

        }else if(this === mgThumbnails[1]){
            mgc.setAttribute("src",images[1])

        }else if (this===mgThumbnails[2]){
            mgc.setAttribute("src",images[2])

        }else if (this===mgThumbnails[3]){
            mgc.setAttribute("src",images[3]) 
        }
    })
})


let prevIcon = document.querySelector(".previous")
let num = 0
let num1=3
prevIcon.addEventListener("click",()=>{
  mgc.setAttribute("src",images[num1--])
  if (num1===-1){
    num1=3
  }
})

let nextIcon = document.querySelector(".next");
nextIcon.addEventListener("click",()=>{
    mgc.setAttribute("src",images[num++])
    if (num===4){
        num=0
    }
})


let close=document.querySelector(".close-icon");

close.addEventListener("click",()=>{
   document.querySelector("footer").style.display="none"
})

document.querySelector("#product-img").addEventListener("click",()=>{
    document.querySelector("footer").style.display="flex"
})

document.querySelector(".cool").addEventListener("click",()=>{
    document.querySelector("nav").style.display="none"
})

document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector("nav").style.display="flex"
})




