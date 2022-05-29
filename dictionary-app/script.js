const wrapper = document.querySelector('.wrapper')
const searchInput = wrapper.querySelector('input')
const synonyms = wrapper.querySelector('.synonyms .list')
const infoText = wrapper.querySelector('.info-text')
const removeIcon = wrapper.querySelector('.search span')

function data(result, word){
  if(result.title){
      infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`
  }else{
      wrapper.classList.add("active")
      let definitions = result[0].meanings[0].definitions[0]
      let phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`
      document.querySelector(".word p").innerText = result[0].word
      document.querySelector(".word span").innerText = phontetics
      document.querySelector(".meaning span").innerText = definitions.definition
      if(definitions.example == undefined){
        document.querySelector(".example").style.display = "none"
      }else{
        document.querySelector(".example").style.display = "block"
        document.querySelector(".example span").innerText = definitions.example
      }
      

      if(definitions.synonyms[0] == undefined){
          synonyms.parentElement.style.display = "none"
      }else{
          synonyms.parentElement.style.display = "block"
          synonyms.innerHTML = "";
          for (let i = 0; i < 5; i++) {
              let tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`
              tag = i == 4 ? tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>` : tag;
              synonyms.insertAdjacentHTML("beforeend", tag)
          }
      }
  }
}

function search(word) {
  searchInput.value = word
  fetchApi(word)
  wrapper.classList.remove('active')
}

function fetchApi(word) {
  wrapper.classList.remove('active')
  infoText.style.color = '#000'
  infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  fetch(url)
    .then(resp => resp.json())
    .then(res => data(res, word))

}

searchInput.addEventListener('keyup', e => {
  if (e.key === 'Enter' && e.target.value) {
    fetchApi(e.target.value)
  }
})

removeIcon.addEventListener('click', () => {
  searchInput.value = ''
  searchInput.focus()
  wrapper.classList.remove('active')
  infoText.style.color = '#9a9a9a'
  infoText.innerText = "Type a word and press enter to get meaning, example, pronunciation, and synonyms of that typed word."
})

