// const submit = document.getElementById("submit")
// submit.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const goomba = document.getElementById("goomba")
//     const bobomb = document.getElementById("bobomb")
//     const cheepcheep = document.getElementById("cheepcheep")
//     const goombaTotal = goomba.value * 5
//     const bobombTotal = bobomb.value * 7
//     const cheepcheepTotal = cheepcheep.value * 11
//     const coinTotal = Number(goombaTotal) + Number(bobombTotal) + Number(cheepcheepTotal)
//     const h2 = document.createElement("h2")
//     h2.textContent = coinTotal
//     document.getElementsByTagName("main")[0].append(h2)
//     goomba.value = "";
//     bobomb.value = "";
//     cheepcheep.value = "";
    
// })

const form = document.form
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const goomba = form.goomba.value
    form.goomba.value = ""
    const bobomb = form.bobomb.value
    form.bobomb.value = ""
    const cheepcheep = form.cheepcheep.value
    form.cheepcheep.value = ""
    const goombaTotal = Number(goomba) * 5
    const bobombTotal = Number(bobomb) * 7
    const cheepcheepTotal = Number(cheepcheep) * 11
    const coinTotal = Number(goombaTotal) + Number(bobombTotal) + Number(cheepcheepTotal)
    const total = document.createElement("h2")
    total.textContent = coinTotal + " coins!"
    document.getElementById("total").append(total) 
})
