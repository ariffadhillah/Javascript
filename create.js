// 
// 1 object literal

let mahasiswa = {
    nama: 'Arif',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan`)
    }
}