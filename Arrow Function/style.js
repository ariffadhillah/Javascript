// Konseop Arrow Function

// Constrructor Funtion

// const Mahasiswa = function () {
//     this.nama = 'Arif';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Haello, nama saya${this.nama},  ${this.umur} tahun.`)
//     }
// }

// const arif = new Mahasiswa();



// Arrow Fauntion
// const Mahasiswa = function () {
//     this.nama = 'Arif';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Haello, nama saya${this.nama},  ${this.umur} tahun.`)
//     }
// }

// const arif = new Mahasiswa();



// Object leteral

// const mhs1 = {
//     nama: 'Arif',
//     umur: 33,
//     sayHello: () => {
//         console.log(`Haello, nama saya ${this.nama},  ${this.umur} tahun.`);
//     }
// }

const box = document.querySelector('.box');
box.addEventListener('click', function (){
    let size = 'size';
    let caption = 'caption';

    if (this.classList.contains(size)) {
        [size, caption] = [caption, size];
    }
    this.classList.toggle(size);
    setTimeout(() => {
        this.classList.toggle(caption);
    }, 600);
})

