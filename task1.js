const Biodata = {
    name: 'Maulana sholihin',
    age: 17,
    hoobies: ['music', 'freedive', 'traveling'],
    isMarried: false,
    schoolList: [
        {
            name: 'SDN Neglasari 1',
            yearIn: 2001,
            yearOut: 2007,
            major: null
        },
        {
            name: 'SMPN 17 Kota Tangerang',
            yearIn: 2007,
            yearOut: 2010,
            major: null
        },
        {
            name: 'SMAN 6 Kota Tangerang',
            yearIn: 2010,
            yearOut: 2013,
            major: 'IPS'
        }

    ],
    skills: [
        {
            skillName: 'Coding',
            Level: 'Beginner'
        },
        {
            skillName: 'Swimming',
            Level: 'Advance'
        }
    ],
    interestinCoding: true
}

console.log(Biodata.schoolList[2].major)