function () {
    var bpm = document.getElementById('bpm');
    if (bpm == null) {
        bpm = document.createElement('div');
        bpm.id = 'bpm';
        bpm.style.cssText = 'position:fixed;z-index:1000;left:0;top:0;padding:10px';
        bpm.innerHTML = '0';
        document.body.appendChild(bpm);
    }
    var count = 0;
    var start = 0;
    var last = 0;

    document.onkeypress = function (e) {
        var current = new Date().getTime();
        if (current - last > 2000) { // in seconds
            count = 0;
        }
        if (count == 0) {
            bpm.innerHTML = 0.0;
            start = current;
            count = 1;
        } else {
            bpm.innerHTML = Math.round(60000 * count / (current - start) * 100) / 100;
            count++;
        }
        last = current;
        return true;
    };
}