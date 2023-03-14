// Destructuring

// function penjumlahanPerkalian (a,b) {
//     return [a+b, a* b];
// }


// // const jumlah = penjumlahanPerkalian(2,3)[1];
// // console.log(jumlah)

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah)


// function kalkulasi (a,b) {
//     return [a+b, a* b, a-b];
// }


// const [tambah, kali, kurang, bagi = 'tidak ada'] = kalkulasi(2,3);

// console.log(bagi)


// object

// function kalkulasi (a,b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {bagi,kali} = kalkulasi(2,3);
// console.log(kali)


// Destructuring function argument

// cara pertama

// const mhs1 = {
//     nama: 'Arif',
//     umur: 33,
//     email: 'examaple@gmail.com'
// }

// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur))

// tidak menggunakan Destructuring
// const mhs1 = {
//     nama: 'Arif',
//     umur: 33,
//     email: 'examaple@gmail.com'
// }

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1))


// menggunakan Destructuring
// contoh 1
// const mhs1 = {
//     nama: 'Arif',
//     umur: 33,
//     email: 'examaple@gmail.com'
// }

// function cetakMhs ({nama, umur}) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1))


// contoh 1
const mhs1 = {
    nama: 'Arif',
    umur: 33,
    email: 'examaple@gmail.com',
    nilai: {
        tugas: 60,
        uts: 75,
        uas: 65
    }
}

function cetakMhs ({nama, umur, nilai:{tugas, uas, uts}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai ${uas}.`;
}

console.log(cetakMhs(mhs1))