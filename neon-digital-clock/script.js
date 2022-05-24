const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const ampm = document.querySelector('#ampm');

const hh = document.querySelector('#hh');
const mm = document.querySelector('#mm');
const ss = document.querySelector('#ss');

const hr_dot = document.querySelector('.hr_dot');
const min_dot = document.querySelector('.min_dot');
const sec_dot = document.querySelector('.sec_dot');

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? 'PM' : 'AM';
  
  // consvert to 12hr clock
  if(h > 12) {
    h = h -12;
  }
  
  // add 0
  h = (h < 10) ? `0${h}` : h;
  m = (m < 10) ? `0${m}` : m;
  s = (s < 10) ? `0${s}` : s;
  
  
  hours.innerHTML = h + '<br><span>Hours</span>';
  minutes.innerHTML = m + '<br><span>Minutes</span>';
  seconds.innerHTML = s + '<br><span>Seconds</span>';
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;


  hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360 / 12 == 30
  min_dot.style.transform = `rotate(${m * 6}deg)`; // 360 / 60 == 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360 / 60 == 6
});

