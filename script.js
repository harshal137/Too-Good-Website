
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function videoconAnimation(){
    let videocon = document.querySelector("#video-container");
let playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale : 1,
        opacity :1
    })
})
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale : 0,
        opacity :0
    })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left :dets.x-30,
        top :dets.y-20
    })
})
}

videoconAnimation()

function loadingAnimation(){
    gsap.from("#page-1 h1", {
        y : 100,
        opacity:0,
        duration :0.9,
        delay : 0.5,
        stagger : 0.3
    })
    gsap.from("#page-1 #video-container", {
        scale :0.9,
        opacity:0,
        duration :0.6,
        delay : 1.1,
    })
}

loadingAnimation()