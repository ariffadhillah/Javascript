const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

close.forEach(function(eventClose) {
    eventClose.addEventListener('click', function(e) {
            // console.log(e.target)
        e.target.parentElement.style.display = 'none'
        // cegah aksi Default menggunakan method preventDefault(); 
        e.preventDefault();
    })
});
