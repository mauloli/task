// const nama = "Bagus"
// nama = "Tri"
// console.log(nama)

// var = Tri
// let = Tri
// const = Error: Assignment to constant variable.

let x = 10
if (x == 10) {
    let x = 20
    console.log(x)
}
console.log(x)


// const = 20 | 10
// let = 20 | 10
// var = 20 | 20

const name = "Bagus"
function replaceName() {
    const name = "Tri"
    console.log(name)
}
console.log(name)
replaceName()

// var = 