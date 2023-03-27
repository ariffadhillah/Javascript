// contoh destucturing

// array destucturing
// const kelompok1 = ['arif', 'dody', 'erik', 'fajar', 'hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(anggota)


// object descturing

// const team = {
//     pa: 'Arif',
//     frontEnd1: 'dody',
//     frontEnd2: 'Eriy',
//     ux: 'Fadhillah',
//     devOps: 'Ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam)



function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1,2,'Arif Fadhillah', false, 10, true, 'Dodoy'))