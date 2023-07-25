// const modalContainer = document.querySelector("#modalContainer")
const modalContainer = document.getElementById('modalContainer')
const openModal = document.getElementById('openModal')
const youtubeIframe = document.getElementById('youtubeIframe')
const semSom = document.getElementById('slashAudio')

openModal.addEventListener('click', showIframe)
window.addEventListener('click', closeModal)
semSom.addEventListener('click', pauseAudio)

function showIframe(){
  modalContainer.style.display = 'block'
}

function closeModal(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = 'none'
    youtubeIframe.src = youtubeIframe.src
  }
}

function playAudio(){
  let music = document.getElementById('music')
  music.play()
  semSom.style.display = 'block'
}

function pauseAudio() {
  music.pause()
  semSom.style.display = 'none'
}