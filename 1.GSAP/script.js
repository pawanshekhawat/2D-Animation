// gsap.to('#box', {
//     y:300,
//     duration: 3,
//     delay: 2,
//     backgroundColor: 'red',
//     rotate: 360,
//     borderRadius: '50%',
//     scale: 0.5,
// })

// gsap.to('h1', {
//     y: 40,
//     duration: 1,
//     opacity: 0,
//     delay:1,
//     stagger: 1 //one by one elements
// })
// gsap.to('#circle', {
//     y: 200,
//     borderRadius: '10px',
//     duration: 1,
//     rotate: 360,
//     repeat: -1,
//     yoyo: true,
//     width: "300px",
// })
let sync = gsap.timeline() // to run in synchronus 
gsap.to("#box1", {
    x: 300,
    duration: 1,
    repeat: -1,
    yoyo: true,
    scale: 1.2,
})
gsap.to("#box2", {
    x: 300,
    duration: 1,
    delay: 0.2,
    repeat: -1,
    yoyo: true,
    scale: 1.2,
})
gsap.to("#box3", {
    x: 300,
    duration: 1,
    delay: 0.4,
    repeat: -1,
    yoyo: true,
    scale: 1.2,
}) 