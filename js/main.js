const kikas = new Audio("../audio/kik.wav");



function kikAnimate() {
    let kikTime = document.querySelector('.kikIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(kikTime) && kikTime > 0) {
        document.querySelector('.column.kik').style.animationDuration = `${kikTime}ms`;
        document.querySelector('.column.kik').style.animationPlayState = 'running';
    } else {
        console.log('netinkama kik reiksme');
    }
}

function kikSound() {
    let kikTime = document.querySelector('.kikIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(kikTime) && kikTime > 0) {
        setInterval(() => {
            kikas.play();
            setTimeout(() => {
                kikas.pause();
                kikas.load();
            }, kikTime - 10)
        }, kikTime);
    } else {
        console.log('netinkama kik reiksme');
    }
}

function machine() {
    kikAnimate();
    kikSound();
}