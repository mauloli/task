nilaiUn = (mtk, bhs, ing, ipa) => {
    const nilai = mtk + bhs + ing + ipa
    const rataRata = Math.round(nilai / 4)
    let grade = ''
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
}

nilaiUn(88, 90, 89, 90)