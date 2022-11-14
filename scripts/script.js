setInterval(() => {
    var yearnow = new Date().getFullYear();
    var now = new Date()
    var time = `${now}`
    document.getElementById("#copyright").innerHTML = `Designed by &copyReza | ${time.split(' ', 5).join(' ')}`;
}, 1000);