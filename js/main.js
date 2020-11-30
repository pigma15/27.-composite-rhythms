const kikas = new Audio("../audio/kik.wav");



function kikAnimate() {
    let kikTime = document.querySelector('.kikIn').value * 1000;
    document.querySelector('.column.kik').style.animationDuration = `${kikTime}ms`;
    document.querySelector('.column.kik').style.animationPlayState = 'running';
}

function kikSound() {
    let kikTime = document.querySelector('.kikIn').value * 1000;
    setInterval(() => {
        kikas.play();
        setTimeout(() => {
            kikas.pause();
            kikas.load();
        }, kikTime - 10)
    }, kikTime);
}

function machine() {
    kikAnimate();
    kikSound();
}