nilaiUn = (mtk, bhs, ing, ipa) => {
    let totalNilai = [mtk, bhs, ing, ipa]
    const nilai = mtk + bhs + ing + ipa
    const rataRata = Math.round(nilai / 4)
    let grade = ''
    if (totalNilai.every(Number)) {
        if (rataRata <= 59) {
            grade = 'E'
        } else if (rataRata <= 69) {
            grade = 'D'
        } else if (rataRata <= 79) {
            grade = 'C'
        } else if (rataRata <= 89) {
            grade = 'B'
        } else if (rataRata <= 100) {
            grade = 'a'
        }
        console.log(`Rata-Rata = ${rataRata}`)
        console.log(`Grade = ${grade}`)
    } else {
        console.log('masukan seluruh angka dengan benar')
    }


}

nilaiUn(88, 90, 89, 90)