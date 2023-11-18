let theWeight = document.querySelector("#filedWeight")
let theHeight = document.getElementById("filedHeight")
let butInResult = document.getElementById("result")
let butInState = document.getElementById("state")
let butInComment = document.getElementById("comment")
let back = document.querySelector("#back")
let main = document.querySelector("main")
let theResult = document.querySelector("#theResult")
let container = document.querySelector("#submit")

container.addEventListener("click", (ev) => {

    ev.preventDefault()
    let x = theWeight.value
    let y = theHeight.value / 100
    console.log(x)
    console.log(y)
    let z = x / (Math.pow(y, 2))
    z = z.toFixed(2)
    console.log(z)

    butInResult.innerHTML = z;

    if (z >= 16 && z < 18.5) {
        butInState.innerHTML = "underweight"
    } 
    else if (z >= 18.5 && z < 25) {
        butInState.innerHTML = "normal"
    } 
    else if (z >= 25 && z <= 40) {
        butInState.innerHTML = "overweight"
    }

    main.style.display = "none";
    theResult.style.display = "block"

})

back.addEventListener("click" , () => {
    main.style.display = "flex";
    theResult.style.display = "none"
})