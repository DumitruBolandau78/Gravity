'use strict'

document.querySelector('.about-team-wrapper .next').addEventListener('click', () => {
    document.querySelector('.carousel').scrollLeft += document.querySelector('.carousel .card').clientWidth;

    if(document.querySelector('.carousel').scrollLeft >= (document.querySelectorAll('.carousel .card').length - 1) * document.querySelector('.carousel .card').clientWidth){
        document.querySelector('.carousel').scrollLeft = 0;
    }
});

document.querySelector('.about-team-wrapper .back').addEventListener('click', () => {
    document.querySelector('.carousel').scrollLeft -= document.querySelector('.carousel .card').clientWidth;

    if(document.querySelector('.carousel').scrollLeft === 0){
        document.querySelector('.carousel').scrollLeft = (document.querySelectorAll('.carousel .card').length - 1) * document.querySelector('.carousel .card').clientWidth;
    }
});

const cryptoAssetNode = document.querySelector('.table .crypto-asset .top-bar');

window.addEventListener('scroll', animationForNode);

function animationForNode(){
    if(cryptoAssetNode.getBoundingClientRect().top + (window.innerHeight / 5)  < window.innerHeight){
        let cryptoAssetValue = 1000;
        const interval = setInterval(() => {
            cryptoAssetValue += 10;
            cryptoAssetNode.textContent = `${cryptoAssetValue}+`;
        }, 50);
    
        setTimeout(() => {
            clearInterval(interval);
            window.removeEventListener('scroll', animationForNode);
        }, 1000);
    }
}
