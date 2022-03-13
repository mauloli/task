
let hasil = ''
const printSegitiga = (num) => {
    if (typeof (num) == 'string') {
        console.log('Data Harus Nuber')
    } else {
        for (let i = num; i > 0; i--) {
            for (let j = 1; j <= i; j++) {
                hasil += j
            }
            hasil += '\n'
        }
    }

    console.log(hasil)
}
printSegitiga(8)