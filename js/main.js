const linkas = "https://pigma15.github.io/27.-composite-rhythms/" 

const kikas = new Audio(linkas + "/audio/kik.mp3");
const snare = new Audio(linkas + "/audio/snr.mp3");
const hat = new Audio(linkas + "/audio/hh.mp3");
const bass = new Audio(linkas + "/audio/bassC.mp3");
const piano = new Audio(linkas + "/audio/pianoE.mp3");
const wurli = new Audio(linkas + "/audio/wurliG.mp3");
const guzheng = new Audio(linkas + "/audio/guzhengB.mp3");

let state = false;

//KIK
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

//SNARE
function snrAnimate() {
    let snrTime = document.querySelector('.snrIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(snrTime) && snrTime > 0) {
        document.querySelector('.column.snr').style.animationDuration = `${snrTime}ms`;
        document.querySelector('.column.snr').style.animationPlayState = 'running';
    } else {
        console.log('netinkama snr reiksme');
    }
}

function snrSound() {
    let snrTime = document.querySelector('.snrIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(snrTime) && snrTime > 0) {
        setInterval(() => {
            snare.play();
            setTimeout(() => {
                snare.pause();
                snare.load();
            }, snrTime - 10)
        }, snrTime);
    } else {
        console.log('netinkama snr reiksme');
    }
}

//HAT
function hatAnimate() {
    let hatTime = document.querySelector('.hatIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(hatTime) && hatTime > 0) {
        document.querySelector('.column.hat').style.animationDuration = `${hatTime}ms`;
        document.querySelector('.column.hat').style.animationPlayState = 'running';
    } else {
        console.log('netinkama hat reiksme');
    }
}

function hatSound() {
    let hatTime = document.querySelector('.hatIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(hatTime) && hatTime > 0) {
        setInterval(() => {
            hat.play();
            setTimeout(() => {
                hat.pause();
                hat.load();
            }, hatTime - 10)
        }, hatTime);
    } else {
        console.log('netinkama hat reiksme');
    }
}

//BASS
function bassAnimate() {
    let bassTime = document.querySelector('.bassIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(bassTime) && bassTime > 0) {
        document.querySelector('.column.bass').style.animationDuration = `${bassTime}ms`;
        document.querySelector('.column.bass').style.animationPlayState = 'running';
    } else {
        console.log('netinkama bass reiksme');
    }
}

function bassSound() {
    let bassTime = document.querySelector('.bassIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(bassTime) && bassTime > 0) {
        setInterval(() => {
            bass.play();
            setTimeout(() => {
                bass.pause();
                bass.load();
            }, bassTime - 10)
        }, bassTime);
    } else {
        console.log('netinkama bass reiksme');
    }
}

//PIANO
function pianoAnimate() {
    let pianoTime = document.querySelector('.pianoIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(pianoTime) && pianoTime > 0) {
        document.querySelector('.column.piano').style.animationDuration = `${pianoTime}ms`;
        document.querySelector('.column.piano').style.animationPlayState = 'running';
    } else {
        console.log('netinkama piano reiksme');
    }
}

function pianoSound() {
    let pianoTime = document.querySelector('.pianoIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(pianoTime) && pianoTime > 0) {
        setInterval(() => {
            piano.play();
            setTimeout(() => {
                piano.pause();
                piano.load();
            }, pianoTime - 10)
        }, pianoTime);
    } else {
        console.log('netinkama piano reiksme');
    }
}

//WURLITZER
function wurliAnimate() {
    let wurliTime = document.querySelector('.wurliIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(wurliTime) && wurliTime > 0) {
        document.querySelector('.column.wurli').style.animationDuration = `${wurliTime}ms`;
        document.querySelector('.column.wurli').style.animationPlayState = 'running';
    } else {
        console.log('netinkama wurli reiksme');
    }
}

function wurliSound() {
    let wurliTime = document.querySelector('.wurliIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(wurliTime) && wurliTime > 0) {
        setInterval(() => {
            wurli.play();
            setTimeout(() => {
                wurli.pause();
                wurli.load();
            }, wurliTime - 10)
        }, wurliTime);
    } else {
        console.log('netinkama wurli reiksme');
    }
}

//GUZHENG
function guzhengAnimate() {
    let guzhengTime = document.querySelector('.guzhengIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(guzhengTime) && guzhengTime > 0) {
        document.querySelector('.column.guzheng').style.animationDuration = `${guzhengTime}ms`;
        document.querySelector('.column.guzheng').style.animationPlayState = 'running';
    } else {
        console.log('netinkama guzheng reiksme');
    }
}

function guzhengSound() {
    let guzhengTime = document.querySelector('.guzhengIn').value * 1000;
    if(/[\d]+[\.\d]*/.test(guzhengTime) && guzhengTime > 0) {
        setInterval(() => {
            guzheng.play();
            setTimeout(() => {
                guzheng.pause();
                guzheng.load();
            }, guzhengTime - 10)
        }, guzhengTime);
    } else {
        console.log('netinkama guzheng reiksme');
    }
}

//MACHINE
function machine() {
    state = true;
    kikAnimate();
    kikSound();
    snrAnimate();
    snrSound();
    hatAnimate();
    hatSound();
    bassAnimate();
    bassSound();
    pianoAnimate();
    pianoSound();
    wurliAnimate();
    wurliSound();
    guzhengAnimate();
    guzhengSound();
}