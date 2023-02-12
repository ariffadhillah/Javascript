// var angka = [1,2,3,4,5,6,7,8,9,0]


// // var cetak = function(e) {
// //     console.log(e)
// // }

// // angka.forEach(cetak);

// // versi gampang
// angka.forEach(function(e){
//     console.log(e)
// })
console.log('ini menggunakan method forEach')

// cara mengahses index menggunakan method  forEach
var angka = [1,2,3,4,5,6,7,8,9,0]
var nama= ['arif', 'fadhillah', 'fadhillah'];

nama.forEach(function(e, i) {
    console.log('mahasiswa ke-' + (i+1) +  ' adalah: ' + e)
})

// Map mengembalikan arry
// cara  menggunakan method Map

console.log('ini menggunakan method Map')
var angkaMap = [1,2,3,4,5,6,7,8,9,0]
var angkaMap2 = angkaMap.map(function(e) {
    return e * 2 ;
});

console.log(angkaMap2.join(' - '));


console.log('ini menggunakan method SORT untuk mengurutkan')
var angkaSort = [1,16,12,3,4,7,5,10,8,9,0]
angkaSort.sort(function(a,b) {
    return a-b;
});
console.log(angkaSort.join(' - '))
