const contextMenu = document.querySelector('.wrapper');
const shareMenu = contextMenu.querySelector('.share-menu');

document.addEventListener('contextmenu', e => {
  e.preventDefault();

  let x = e.offsetX, 
      y = e.offsetY,
      windWidth = window.innerWidth,
      windHeight = window.innerHeight,
      cmWidth = contextMenu.offsetWidth,
      cmHeight = contextMenu.offsetHeight;

  if (x > (windWidth - cmWidth - shareMenu.offsetWidth)) {
    shareMenu.style.left = '-200px';
  } else {
    shareMenu.style.left = '';
    shareMenu.style.right = '-200px';
  }

  x = x > windWidth - cmWidth ? windWidth - cmWidth : x;
  y = y > windHeight - cmHeight ? windHeight - cmHeight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = 'visible'
})

document.addEventListener('click', () => contextMenu.style.visibility = 'hidden')