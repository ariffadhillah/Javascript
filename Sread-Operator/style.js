// latihan 1

// const liMhs = document.querySelectorAll('li');


// const mhs = [];

// for (let i = 0; i < liMhs.length; i++ ) {
//     mhs.push(liMhs[i].textContent);
// }

// console.log(mhs)


// menggunakan fungsi map

// const mhs = [...liMhs].map( m => m.textContent );
// console.log(mhs)



// latihan 2

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;
