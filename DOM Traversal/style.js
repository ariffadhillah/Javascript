// Event Handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');


// close.addEventListener('click', function(){
//     card.style.display = 'none';
//     console.log(card)
// });

// 01
// Event DOM Traversal
// menggunakan FOR
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

// cara pertama menggunakan FOR
// for(let i =0; i< close.length; i++) {
//     // cara pertama
    
//     // close[i].addEventListener('click', function() {
//         // close[i].parentElement.style.display = 'none'
//         // console.log("element card nomor ke "  + i +" hilang")

//     // })
    
//     // cara ke dua
//     // menggunakan parameter
//     close[i].addEventListener('click', function(e) {
//         // console.log(e.target)
//         e.target.parentElement.style.display = 'none';
//     })
   

// }

 // cara ke tiga
    // menggunakan forEach
    close.forEach(function(eventClose) {
        eventClose.addEventListener('click', function(e) {
            // console.log(e.target)
            e.target.parentElement.style.display = 'none'
        })
    });
