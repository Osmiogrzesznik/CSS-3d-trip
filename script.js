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
var intro = Array.from(document.querySelectorAll(".title2"));
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

els_szs = elements.map((element, i, arr) => {
    t = element.textContent
    return t.length
})
mx = Math.max(...els_szs)
mn = Math.min(...els_szs)
els_szs = els_szs.map((elsz, i, arr) => {
    scaled = scale(elsz, mn, mx, 1.5, 0); //reverse - biggest will be the smallest
    return scaled
})

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function randomBetween(min, max) {

    return min + Math.round((max - min) * Math.random())
}

function rN(m) {
    return Math.random() * m;
}


var keyframesAll = [];
intro.forEach((element, i, arr) => {
    let sz = els_szs[i]
    let amnt = arr.length
    let duration = 2000 * amnt
    element.animate({
        opacity: [0, 1, 0],
        filter: ['blur(5px)', 'blur(0px)', 'blur(5px)']
    }, {
        // timing options
        duration: duration,
        delay: duration * (i),
        iterations: 1,
        easing: 'ease-in'
    });
})

function animateWarp() {

    elements.forEach((element, i, arr) => {
        let sz = els_szs[i]

        let amnt = arr.length

        let startOpacity = 0
        let width = element.offsetWidth
        let height = element.offsetHeight

        let midOpacity = 1
        let endOpacity = 0
        //original messy
        // let startTranslate3dStr = ` translate3d(${0*i*50}px, 0, ${(- totalDistance + (i*oneElemDistance ) )}px)`
        // let endTranslate3dStr = ` translate3d(${0*i*50}px, 0, ${totalDistance + (i*oneElemDistance) }px)`
        let r = randomBetween(-50, 50)
        let r2 = randomBetween(-50, 50)
        let r3 = randomBetween(-50, 50)
        let r4 = randomBetween(-50, 50)
        let startTranslate3dStr = ` translate3d(${r*sz}px, ${r2*sz}px, ${- totalDistance*8}px)`

        let endTranslate3dStr = ` translate3d(${r3*sz}px, ${r4*sz}px, ${totalDistance*8}px)`
        rs = [rN(0.2 * sz), rN(.2 * sz), rN(0.2 * sz), randomBetween(-30 * sz, 30 * sz)].join()
        rs2 = [rN(0.2 * sz), rN(.2 * sz), rN(0.2 * sz), randomBetween(-30 * sz, 30 * sz)].join()

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
                offset: 0.3,
                filter: 'blur(0px)'
            },
            {
                opacity: midOpacity,
                offset: 0.50,
                filter: 'blur(0px)'
            },
            {
                opacity: midOpacity,
                offset: 0.53,
                filter: 'blur(3px)'
            },
            {
                opacity: 0,
                offset: 0.56,
                filter: 'blur(5px)'
            },
            {
                opacity: 0,
                offset: 0.57,
                filter: 'blur(0px)'
            },
            {
                transform: endTransfStr,
                // transform: startTransfStr,
                opacity: endOpacity,
                // offset: 0.99,
            }
        ]

        keyframesAll.push(keyframes);
        element.animate(keyframes, {
            // timing options
            duration: 500 * (amnt),
            delay: 500 * (i),
            iterations: Infinity,
            easing: 'ease-in'
        });
    })

}

animateWarp()