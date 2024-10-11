gsap.to("#page1 #box", {
    scale: 2,
    // rotate: 360,
    duration: 2,
    delay: 1,
})
gsap.to("#page2 #box", {
    scale: 2,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
        trigger: '#page2 #box',
        scroller: 'body',
        markers: true, //provide start and end animation marks
        start: "top 40%",
        end: "top 10%",
        pin: true,// work with scrooll
        scrub: 2, //smooth animation
       }
})
gsap.to("#page3 #box", {
    scale: 2,
    // rotate: 360,
    duration: 2,
    scrollTrigger: '#page3 #box'
})

scrollTrigger()