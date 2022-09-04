let saveEl = document.getElementById('save-el')
let countEL = document.getElementById('count-el')
let count = 0

//  increment()
function increment() {
    count++
    countEL.textContent = count
    console.log(count)
}
 
//  save()
 function save() {
    let countSave = count + ', '
    saveEl.textContent += countSave
     console.log(count)
     countEL.textContent = 0
     count = 0
 }



