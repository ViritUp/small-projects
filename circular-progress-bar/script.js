const numEl = document.querySelector('#number');
const circle = document.querySelector('#circle');
const num = numEl.getAttribute('data-number');
let counter = 0;

circle.style.setProperty("--num-anim", (440 - 440 * (num/100)));

setInterval(() => {
  if(counter == num) {
    clearInterval;
  } else {
    counter += 1;
    numEl.innerHTML = `${counter}%`;
  }
}, 1500/num);