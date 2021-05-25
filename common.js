(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    ////根据浏览器自适应改变main部分宽高
    function setMainSize() {
        var main = document.querySelector('.main');
        var nwidth = document.documentElement.clientWidth;
        var nheight = document.documentElement.clientHeight;
        main.style.width = (nwidth) + 'px';
        main.style.height = (nheight) + 'px';
    }
    setMainSize();

    // reset rem unit on page resize
    window.addEventListener('resize', setMainSize)
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            setMainSize();
        }
    })
}(window, document))