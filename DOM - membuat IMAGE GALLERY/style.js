// cara pertama
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.imgthumbnail');


container.addEventListener('click', function(e){


    // cek apakah yang diclikk adalah img tumnil
    if (e.target.className == 'imgthumbnail') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500)

        thumbs.forEach (function(thumb){
            // cara pertama
            // if (thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }            

            // cara kedua
            thumb.className = 'imgthumbnail'
        });
        e.target.classList.add('active');
    }
})