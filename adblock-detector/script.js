setTimeout(() =>{
  const detect = document.querySelector('#detect')
  const wrapper = document.querySelector('.wrapper')
  const button = wrapper.querySelector('button')


  let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd", "ad-slot", "ad-triple-box", "ads-right", "afs-ad", "dfp-ad", "fbs-ad"]

  for (let item of adClasses ) {
    detect.classList.add(item)
  }

  let getProperty = window.getComputedStyle(detect).getPropertyValue("display")

  button.addEventListener('click', () => {
    wrapper.classList.remove('show')
  })

  if (!wrapper.classList.contains('show')) {
    getProperty == 'none' ? wrapper.classList.add('show') : wrapper.classList.remove('show')
  }
})