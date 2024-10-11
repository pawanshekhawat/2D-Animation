const main = document.querySelector("[data-scroll-container]")
const scroll = new LocomotiveScroll({
    el: main, //el is element
    smooth: true, // scrolling smooth
    lerp: 0.1, // scrolling smooth lerpness
})