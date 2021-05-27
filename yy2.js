/* 这里是抖动音符文件 */
var yy_char = document.querySelector('.yy2_char');
var btn = document.querySelector('.yy2');
btn.onclick = function() {
    yy_char.style.display = 'block';
    //3000后消失

    setTimeout(function() {
        yy_char.style.display = 'none';
    }, 500);
}