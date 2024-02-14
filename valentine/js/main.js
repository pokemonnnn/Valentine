const depan = document.querySelector('.xl-container .front-left-side');
const belakang = document.querySelector('.xl-container .back-side');
const tutup = document.querySelector('.xl-container .front-bottom-side');
const svgAll = document.querySelectorAll('.xl-container svg');
const letterEnv =  document.querySelector('.xl-container .letter');
const container = document.querySelector('.xl-container .envelope');
const cover = document.querySelector('.xl-container .cover');
const cover1 = document.querySelector('.xl-container .cover1');

const coverSm = document.querySelector('.sm-container .cover');
const coverSm1 = document.querySelector('.sm-container .cover1');

document.addEventListener("DOMContentLoaded", function () {
    var audio = new Audio('music/MyLoveMineAllMine.mp3');
    audio.volume = 0;
    
    var fadeInInterval;
    var fadeOutInterval;

    function playMusic() {
        audio.currentTime = 33.9;
        audio.play().catch(function (error) {
            console.error('Error playing audio:', error);
        });

        clearInterval(fadeOutInterval); // Hentikan interval fade-out jika masih berjalan

        fadeInInterval = setInterval(function () {
            if (audio.volume < 0.5) {
                audio.volume += 0.01;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 150);
    }

    function pauseMusic() {
        clearInterval(fadeInInterval); // Hentikan interval fade-in jika masih berjalan

        fadeOutInterval = setInterval(function () {
            if (audio.volume > 0) {
                audio.volume -= 0.01;
            } else {
                clearInterval(fadeOutInterval);
                audio.pause();
            }
        }, 150);
    }

    cover.addEventListener("click", function () {
        if (audio.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });
    // small
    coverSm.addEventListener("click", function () {
        if (audio.paused) {
            playMusic();
        } else {
            pauseMusic();
        }
    });

    audio.addEventListener("ended", function () {
        playMusic();
    });
});







cover.addEventListener('click', function(){
    cover.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        cover1.style.transform = 'translateX(-100%)';
    }, 200);
});

function suratOpen() {
    tutup.style.transform = 'rotateX(-180deg) translateY(0%)';
    // container.style.transform = 'rotateZ(45deg)';
    // tutup.style.transform = '';
    // letterEnv.style.transform = 'translateY(-10%)';
    letterEnv.style.zIndex = 5;
    depan.style.zIndex = 7;
    svgChange();
    
    setTimeout(() => {
        // tutup.style.transformOrigin = '0px 6px';
        depan.style.transform = 'translateY(50%)';
        belakang.style.transform = 'translateY(48%)';
        tutup.style.transform = 'rotateX(-180deg) translateY(-50%)';
        letterEnv.style.zindex = 6;
        depan.style.zIndex = 5;
    }, 300);
    svgAll.forEach((svg) => {
        svg.style.zIndex = 6; 
    });

    // setTimeout(letterMove, 600);
    // letterEnv.style.transition = '.9s ease-in-out';
    setTimeout(letterChange, 500);
}

function svgChange(){
    svgAll[0].style.top = '50px';
    svgAll[0].style.left = '30px';
    svgAll[0].style.transform = 'rotate(-45deg)';
    svgAll[0].style.opacity = '0';

    svgAll[1].style.top = '50px';
    svgAll[1].style.left = '200px';
    svgAll[1].style.transform = 'rotate(10deg)';
    svgAll[1].style.opacity = '0';

    svgAll[2].style.top = '50px';
    svgAll[2].style.left = '400px';
    svgAll[2].style.transform = 'rotate(45deg)';
    svgAll[2].style.opacity = '0';
    
    svgAll[3].style.top = '50px';
    svgAll[3].style.left = '700px';
    svgAll[3].style.transform = 'rotate(45deg)';
    svgAll[3].style.opacity = '0';
    
    svgAll[4].style.top = '50px';
    svgAll[4].style.left = '-80px';
    svgAll[4].style.transform = 'rotate(-45deg)';
    svgAll[4].style.opacity = '0';
    
    svgAll[5].style.top = '50px';
    svgAll[5].style.left = '600px';
    svgAll[5].style.transform = 'rotate(45deg)';
    svgAll[5].style.opacity = '0';

}

function letterChange(){
    // letterEnv.style.top = '100px';
    letterEnv.style.transform = 'scale(1)';
}

// SM Size
const sM = document.querySelector('.sm-container');
const depanSm = sM.querySelector('.front-left-side');
const tutupSm = sM.querySelector('.front-bottom-side');
const letterEnvSm = sM.querySelector('.letter');
const belakangSm = sM.querySelector('.back-side');
const txtSm = "For my fav person thank you for all the days that you made feel loved and appreciated. I’m out of words to tell how grateful i’m to have you. You’ll always the person that i love the most in this world and nothing could ever compare to the love i have for you.";
const pTxtSm = sM.querySelector('.text-content');
let svgAllSm = sM.querySelectorAll('svg');

svgAllSm.forEach((element) => {
    element.style.zIndex = 10;
    element.style.position = 'absolute';
    element.style.top = '240px';
    element.style.left = '150px';
    element.style.zIndex = 3;
});

coverSm.addEventListener('click', function(){
    coverSm.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        coverSm1.style.transform = 'translateX(-100%)';
    }, 200);
});

function suratOpenSm(){
    tutupSm.style.transform = 'rotateX(-180deg) translateY(0%)';
    tutupSm.style.zIndex = 1;

    setTimeout(() => {
        depanSm.style.transform = 'translateY(90%)';
        tutupSm.style.transform = 'rotateX(-180deg) translateY(-91%)';
        belakangSm.style.transform = 'translateY(96%)';
        letterEnvSm.style.transform = 'translateY(-50%)';
    }, 500);

    setTimeout(() => {
        letterEnvSm.style.zIndex = '4'
        letterEnvSm.style.transform = 'scale(1)';
    }, 900);

    setTimeout(() => {
        typeWriter();
    }, 1800);
    svgSm();
}

function svgSm() {
    svgAllSm[0].style.top = '70px';
    svgAllSm[0].style.left = '10px';
    svgAllSm[0].style.transform = 'rotate(-45deg)';
    svgAllSm[0].style.opacity = '0';

    svgAllSm[1].style.top = '50px';
    svgAllSm[1].style.left = '60px';
    svgAllSm[1].style.transform = 'rotate(-15deg)';
    svgAllSm[1].style.opacity = '0';
    
    svgAllSm[2].style.top = '120px';
    svgAllSm[2].style.left = '60px';
    svgAllSm[2].style.transform = 'rotate(-35deg)';
    svgAllSm[2].style.opacity = '0';

    svgAllSm[3].style.top = '70px';
    svgAllSm[3].style.left = '130px';
    svgAllSm[3].style.transform = 'rotate(0deg)';
    svgAllSm[3].style.opacity = '0';

    svgAllSm[4].style.top = '20px';
    svgAllSm[4].style.left = '160px';
    svgAllSm[4].style.transform = 'rotate(0deg)';
    svgAllSm[4].style.opacity = '0';
    
    svgAllSm[5].style.top = '120px';
    svgAllSm[5].style.left = '180px';
    svgAllSm[5].style.transform = 'rotate(0deg)';
    svgAllSm[5].style.opacity = '0';

    svgAllSm[6].style.top = '90px';
    svgAllSm[6].style.left = '200px';
    svgAllSm[6].style.transform = 'rotate(15deg)';
    svgAllSm[6].style.opacity = '0';

    svgAllSm[7].style.top = '50px';
    svgAllSm[7].style.left = '250px';
    svgAllSm[7].style.transform = 'rotate(25deg)';
    svgAllSm[7].style.opacity = '0';
    
    svgAllSm[8].style.top = '120px';
    svgAllSm[8].style.left = '300px';
    svgAllSm[8].style.transform = 'rotate(45deg)';
    svgAllSm[8].style.opacity = '0';
}

function typeWriter() {
    let i = 0;
    const speed = 50; // Kecepatan mengetik, bisa disesuaikan

    function type() {
        if (i < txtSm.length) {
            pTxtSm.innerHTML += txtSm.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    // Panggil fungsi mengetik
    type();
}


