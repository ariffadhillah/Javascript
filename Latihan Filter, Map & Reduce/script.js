// ambil semua element vidoe

const vidoes = Array.from( document.querySelectorAll('[data-duration]'));
// console.log(vidoes)

// pilih hanya yang 'JAVASCRIPT LANJUTAN'

let jsLanjut = vidoes.filter(vidoe => vidoe.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 vidoe
.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] cara displit
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})
// jumlah semua detik
.reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');

pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmVidoe = vidoes.filter(vidoe => vidoe.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVidoe = document.querySelector('.jumlah-video');
pJmlVidoe.textContent = `${jmVidoe} Vidoe.`;

console.log(jmVidoe)