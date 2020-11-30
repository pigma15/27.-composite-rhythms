const kik = new Audio("../audio/kik.wav");






function kikAnimate() {
    let kikTime = document.querySelector('.kikIn').value * 1000;
    document.querySelector('.column.kik').style.animationDuration = `${kikTime}ms`;
    document.querySelector('.column.kik').style.animationPlayState = 'running';
}

function kikSound() {
    let kikTime = document.querySelector('.kikIn').value * 1000;
    setInterval(() => {
        kik.play();
        setTimeout(() => {
            kik.pause();
            kik.load();
        }, kikTime - 10)
    }, kikTime);
}

function both() {
    kikAnimate();
    kikSound();
}