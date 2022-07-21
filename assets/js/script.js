const chico = document.querySelector('.chico')
const pipe = document.querySelector('.pipe')

const jump = () => {
    chico.classList.add('jump')

    setTimeout(() => {chico.classList.remove('jump')}, 850)

    chico.src = 'assets/img/images.jpg'

    setTimeout(() => {
        chico.src = 'assets/img/chico.jpg'
    }, 850);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const chicoPostion = Number(window.getComputedStyle(chico).bottom.replace('px', ''))

    if(pipePosition <= 132 && pipePosition > 0 && chicoPostion < 210) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        chico.style.animation = 'none'
        chico.style.bottom = `${chicoPostion}px`

        chico.src = 'assets/img/lose.jpg'
    }

}, 10);

document.addEventListener('keydown', jump)


