function setHtmlFont() {
    var windowW = window.innerWidth ? window.innerWidth : document.body.clientWidth;
    if (windowW >= 640) {
        document.documentElement.style.fontSize = '40px';
    } else {
        var winFont = windowW / 16;
        document.documentElement.style.fontSize = winFont + 'px';
    }
};

setHtmlFont();

window.addEventListener('resize', setHtmlFont)