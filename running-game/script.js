const hero = document.querySelector('.hero');
const heroBoy = document.querySelector('.hero-boy');
const villian = document.querySelector('.villian');

const jump = () => {
  if (hero.classList != 'animate') {
    hero.classList.add('animate');
    villian.style.animation = 'move 1s infinite linear';
  }
  setTimeout(() => {
    hero.classList.remove('animate');
  }, 300);
};

document.addEventListener('keydown', (e) => {
  if (e.code == 'Space') {
    jump();
  }
});

let isAlive = setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));
  let villianLeft = parseInt(
    window.getComputedStyle(villian).getPropertyValue('left')
  );

  if (villianLeft < 40 && villianLeft > 20 && heroTop >= 130) {
    villian.style.animation = 'none';
    alert('Game over. Press spacebar to start');
  }
}, 10);
