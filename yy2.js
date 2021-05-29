/* 这里是抖动音符文件 */
var yy_chars = document.querySelectorAll('.yy2_char');

/* 区域未分btn */
var yy2Btn = document.querySelectorAll('.yy2');
let audio_duangs = document.querySelectorAll('.duang');

document.addEventListener('keyup', function(event) {
    if (event.key === '8') {
        shakeChar(yy_chars[0]);
        audio_duangs[0].play();
    };
    if (event.key === '9') {
        shakeChar(yy_chars[1]);
        audio_duangs[1].play();
    };
    if (event.key === '0') {
        shakeChar(yy_chars[2]);
        audio_duangs[2].play();
    }
});
for (let i = 0; i < yy2Btn.length; i++) {
    yy2Btn[i].addEventListener('click', function() {
        shakeChar(yy_chars[i])
        audio_duangs[i].play();
    });
}

function shakeChar(oneChar) {
    oneChar.style.display = 'block';
    setTimeout(function() {
        oneChar.style.display = 'none';
    }, 500);

}