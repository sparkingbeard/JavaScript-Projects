const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.textContent = (date.toLocaleTimeString());
}, 1000);