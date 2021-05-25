var nwidth = document.documentElement.clientWidth;
var nheight = document.documentElement.clientHeight;




var count = 0;

let points = []; //装触发点
let animations = []; //装对应的动画函数
let main = document.querySelector('.main');
points[0] = document.querySelector('.p00');





//创建randNum个dom节点
function creatDOMs(num) {
    var mousePosX = window.screenX;
    var mousePosY = window.screenY;
    console.log(mousePosX, mousePosY);
    let doms = [];
    for (let i = 0; i < num; i++) {
        var dom1 = document.createElement('div');
        r = 30;
        dom1.style.width = r + 'px';
        dom1.style.height = r + 'px';
        dom1.className = 'newCircle';
        //获取鼠标附近随机位置
        var posX = mousePosX + Math.floor(-50 + Math.random() * 100);
        console.log(posX);
        var posY = 1 + Math.floor(Math.random() * 300);
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
        // let currX = doms[i].offsetLeft;
        // let currY = doms[i].offsetTop;
        let speedDp = 10 + Math.random() * 30;
        console.log('速度' + speedDp);
        let timer1 = setInterval(function() {
            doms[i].style.top = parseInt(doms[i].style.top) + speedDp + 'px';

        }, 20);
        //let timer2 = setTimeout(clearInterval(timer1), 2000);
    }
}


main.addEventListener('click', getRandomCircle);

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