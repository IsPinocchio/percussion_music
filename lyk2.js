var btn2 = document.querySelector('.lyk2');
let audio_clapping = document.querySelector('.clapping');
const colors = [
    ['#ffe58f', '#ffc53d', '#d48806', '#874d00'],
    ['#b7eb8f', '#73d13d', '#389e0d', '#135200'],
    ['#87e8de', '#36cfc9', '#08979c', '#00474f'],
    ['#ffadd2', '#f759ab', '#c41d7f', '#780650'],
    ['#d3adf7', '#9254de', '#531dab', '#22075e']
]

btn2.addEventListener('click', showSquare);

document.addEventListener('keyup', function(event) {
    if (event.key === '3') {
        showSquare();
    }
});

function showSquare() {

    console.log(2);
    const color = colors[Math.floor(Math.random() * 4)];
    let r1 = document.createElement('div');
    r1.classList.add('rect1');
    r1.style.borderColor = color[0];
    let r2 = document.createElement('div');
    r2.classList.add('rect2');
    r2.style.borderColor = color[1];
    let r3 = document.createElement('div');
    r3.classList.add('rect3');
    r3.style.borderColor = color[2];
    let r4 = document.createElement('div');
    r4.classList.add('rect4');
    r4.style.borderColor = color[3];
    main.appendChild(r1);
    main.appendChild(r2);
    main.appendChild(r3);
    main.appendChild(r4);
    // let r1 = document.getElementsByClassName('rect1')[0];
    // let r2 = document.getElementsByClassName('rect2')[0];
    // let r3 = document.getElementsByClassName('rect3')[0];
    // let r4 = document.getElementsByClassName('rect4')[0];
    setTimeout(() => {
        main.removeChild(r1);
        main.removeChild(r2);
        main.removeChild(r3);
        main.removeChild(r4);
    }, 2000);
    audio_clapping.play();
}