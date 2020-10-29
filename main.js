// DOM ELEMENTS
const articleContainer = document.querySelector("#articles-container")
const likeHearts = document.querySelectorAll(".like-glyph")
const modalBanner = document.querySelector("#modal")
const modalMessageContainer = document.querySelector("p#modal-message")
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// EVENT LISTENERS
likeHearts.forEach(spanElement => {
  spanElement.addEventListener("click", likeAPost)
})

// EVENT HANDLERS

function likeAPost(event) {
  const heartSpan = event.target
  mimicServerCall("anyUrl-I-Think?.com")
    .then(response => {
      alternateHearts(heartSpan)
      console.log(response)
    })
    .catch(error => {
      displayError(error)
    })
}

function displayError(error) {
  modalMessageContainer.textContent = error
  modalBanner.classList.remove("hidden")
  setTimeout(() => modalBanner.classList.add("hidden"), 5000)
}

function alternateHearts(heartSpan) {
  if (heartSpan.textContent === EMPTY_HEART) {
    heartSpan.textContent = FULL_HEART
    heartSpan.classList.add("activated-heart")
  } else {
    heartSpan.textContent = EMPTY_HEART
    heartSpan.classList.remove("activated-heart")
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
