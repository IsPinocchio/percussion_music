const lyk1 = document.querySelector(".lyk1");
const body = document.body;

//获得随机颜色
var getRandomColor = function() {
    return '#' +
        (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
                (color.length == 6) ? color : arguments.callee(color);
        })('');
}

//小球
class Ball {
    constructor(left, top, small, big, speed) {
        this.left = left;
        this.top = top;
        this.small = small;
        this.big = big;
        //console.log(this.small, this.big);
        this.r = small;
        this.speed = speed;
        this.div = document.createElement("div");
    }

    show() {
            this.div.style.width = this.small + "px";
            this.div.style.height = this.small + "px";
            this.div.style.position = "absolute";
            this.div.style.left = this.left + "vw";
            this.div.style.top = this.top + "vh";
            this.div.style.backgroundColor = getRandomColor();
            this.div.style.borderRadius = this.small + "px";
            this.div.style.opacity = 0.7;
            body.appendChild(this.div);
            new Promise(res => {
                this.animationbig(res);
            }).then(() => {
                this.animationsmall();
            })

        }
        //先变大
    animationbig(res) {
            let r = this.r;
            let big = this.big;
            let speed = this.speed;
            var div = this.div;
            var interval = setInterval(function() {
                r += speed;
                div.style.height = r + "px";
                div.style.width = r + "px";
                div.style.borderRadius = r + "px";
                div.style.opacity += speed / 100;
                if (r >= big) {
                    res()
                    clearInterval(interval);
                }
            }, 5)
        }
        //后变小
    animationsmall() {
        var div = this.div;
        //console.log("width ", div.style.width);
        var r = Number(div.style.width.replace("px", ''));
        var speed = this.speed;
        var small = this.small;
        //console.log(r);
        var interval = setInterval(function() {
            r -= speed;
            //console.log(r);
            div.style.height = r + "px";
            div.style.width = r + "px";
            div.style.borderRadius = r + "px";
            div.style.opacity -= speed / 100;
            if (r <= (small + r) / 2) {
                body.removeChild(div)
                clearInterval(interval);
            }
        }, 5)
    }

}

//生成随机小球参数
function randomBall() {
    let params = [];
    params[0] = Math.floor(Math.random() * 70 + 10);
    params[1] = Math.floor(Math.random() * 70 + 10);
    params[2] = Math.floor(Math.random() * 40 + 30);
    params[3] = Math.floor(Math.random() * 60 + 40);
    params[4] = Math.floor(Math.random() + 1);
    if (params[2] > params[3]) {
        [params[2], params[3]] = [params[3], params[2]];
    }
    return params;
}

lyk1.addEventListener('click', function() {
    var nums = Math.ceil(Math.random() * 5 + 1);
    for (let i = 0; i < nums; i++) {
        new Ball(...randomBall()).show()
    }
})