// document.getElementById("tunnel").animate([
//     // keyframes
//     {
//         transform: 'translateY(0px)'
//     },
//     {
//         transform: 'translateY(-300px)'
//     }
// ], {
//     // timing options
//     duration: 1000,
//     iterations: Infinity
// });
function say(...xx) {
    console.log(...xx)
}
var elements = [];
var elements = Array.from(document.querySelectorAll(".ws"));
var oneElemDistance = 100
var totalDistance = elements.length * oneElemDistance
// var commonStr = `translate(-50%, -50%) perspective(${totalDistance}px)`
var commonStr = `perspective(${totalDistance}px)`

function divd01(a, b) {
    o = a / b
    if (o === Infinity) {
        return 0
    }
    return o
}
// elements.forEach((element, i, arr) => {
//     tor = element.innerText;
//     tnu = tor.replace(/[a-z]/gi, i)
//     element.innerText = tnu

// })

// elements.forEach((element, i, arr) => {
//     let r = Math.round(10 * Math.random())
//     let h = 100 - r
//     element.style.height = h + "vh"

// })
function randomBetween(min, max) {

    return min + Math.round((max - min) * Math.random())
}

function rN(m) {
    return Math.random() * m;
}
var keyframesAll = [];
elements.forEach((element, i, arr) => {
    i = i + 1
    let amnt = arr.length

    let startOpacity = 0
    say(startOpacity)
    let midOpacity = 1
    let endOpacity = 0
    //original messy
    // let startTranslate3dStr = ` translate3d(${0*i*50}px, 0, ${(- totalDistance + (i*oneElemDistance ) )}px)`
    // let endTranslate3dStr = ` translate3d(${0*i*50}px, 0, ${totalDistance + (i*oneElemDistance) }px)`
    let r = randomBetween(-50, 50)
    let startTranslate3dStr = ` translate3d(${0*i*50}px, ${r}px, ${- totalDistance}px)`
    let r2 = randomBetween(-50, 50)
    let endTranslate3dStr = ` translate3d(${0*i*50}px, ${r2}px, ${totalDistance}px)`
    rs = [rN(0.5), rN(1), rN(0.2), randomBetween(-50, 50)].join()
    rs2 = [rN(0.5), rN(1), rN(0.2), randomBetween(-50, 50)].join()

    let startRotStr = ` rotate3d(${rs}deg) `
    let endRotStr = ` rotate3d(${rs2}deg) `
    let startTransfStr = commonStr + startTranslate3dStr + startRotStr
    let endTransfStr = commonStr + endTranslate3dStr + endRotStr

    let keyframes = [
        // keyframes
        {
            transform: startTransfStr,
            opacity: startOpacity,
            // offset: 0
        },
        {

            opacity: 0.1,
            offset: 0.5,
        }, {

            opacity: midOpacity,
            offset: 0.80,
        }, {

            // opacity: startOpacity,
            // offset: 0

            transform: endTransfStr,
            // transform: startTransfStr,
            opacity: endOpacity,
            // offset: 0.99,
        }
    ]

    keyframesAll.push(keyframes)
    element.animate(keyframes, {
        // timing options
        duration: 500 * (amnt + 1),
        delay: 1000 * (i - 1),
        iterations: Infinity,
        easing: 'linear'
    });
})