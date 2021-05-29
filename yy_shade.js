// let main = document.querySelector('.main');
let shade = document.getElementById('shade');

let shadebtn = document.querySelectorAll('.yy3');
let audio_shade = document.querySelectorAll('.audio_shade');

function shadeMove() {
    shade.classList.toggle('active');
    setTimeout(function() {
        main.classList.toggle('active');
    }, 800);
    audio_shade[0].play();
}

shadebtn[0].addEventListener('click', shadeMove);
document.addEventListener('keydown', function(e) {
    if (e.key === '-') {
        shadeMove();
    }
});

function shadeEnlarge() {
    shade.classList.toggle('enlarge');
    setTimeout(function() {
        shade.classList.toggle('enlarge');
    }, 800);
    audio_shade[1].play();
}


shadebtn[1].addEventListener('click', shadeEnlarge);
document.addEventListener('keydown', function(e) {
    if (e.key === '=') {
        shadeEnlarge();
    }
});
// let timer_shade = setInterval(shadeMove, 5000);