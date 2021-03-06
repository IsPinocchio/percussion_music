var main = document.querySelector('.main');
let audio_na = document.querySelector('.na');

//创建randNum个dom节点
function creatDOMs(num) {
    let doms = [];
    for (let i = 0; i < num; i++) {
        var dom1 = document.createElement('div');
        r = 30;
        dom1.style.width = r + 'px';
        dom1.style.height = r + 'px';
        dom1.className = 'newCircle';
        //获取鼠标附近随机位置
        var posX = 1 + Math.floor(Math.random() * 1500);
        //console.log(posX);
        var posY = 1 + Math.floor(Math.random() * 200);
        dom1.style.left = posX + 'px';
        dom1.style.top = posY + 'px';
        dom1.style.background = getRandomColor();
        doms.push(dom1);
        main.appendChild(dom1);
    }
    return doms;
}

//新添加的圆
var getRandomCircle = function() {
    let randNum = 1 + Math.floor(Math.random() * 10);
    //var newCir = document.createElement('div');
    let doms = Array.from(creatDOMs(randNum));
    for (let i = 0; i < doms.length; i++) {
        let speedDp = 10 + Math.random() * 10;
        //console.log('速度' + speedDp);
        let timer1 = setInterval(function() {
            doms[i].style.top = parseInt(doms[i].style.top) + speedDp + 'px';

        }, 20);
    }
    audio_na.play();
}

var yy1 = document.querySelector('.yy1');
yy1.addEventListener('click', getRandomCircle);
document.addEventListener('keyup', function(event) {
    if (event.key === '1') {
        getRandomCircle();
    }
});

/* -------基础函数们-------- */
//获得随机颜色
function getRandomColor() {
    return '#' +
        (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
                (color.length == 6) ? color : arguments.callee(color);
        })('');
}

//匀速移动



//缓速移动
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}