var card1 = new Card(1, 'assets/bey1.jpg');
var card2 = new Card(2, 'assets/bey1.jpg');
var card3 = new Card(3, 'assets/bey2.jpg');
var card4 = new Card(4, 'assets/bey2.jpg');
var card5 = new Card(5, 'assets/bey3.jpeg');
var card7 = new Card(7, 'assets/bey4.jpg');
var card6 = new Card(6, 'assets/bey3.jpeg');
var card8 = new Card(8, 'assets/bey4.jpg');
var card9 = new Card(9, 'assets/bey5.jpg');
var card10 = new Card(10, 'assets/bey5.jpg');
var wholeDeck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]
var deck = new Deck();
var newGameButton = document.querySelector('.new-game-btn');
var mainPage = document.querySelector('.main-page');
var congratsPage = document.querySelector('.congrats-page');
var sectionRight = document.querySelector('.section-right');
var sectionLeft = document.querySelector('.section-left');
var matchCounter = document.querySelector(".match-counter");
var minutesInput = document.querySelector('.minutes');
var secondsInput = document.querySelector('.seconds');


// window.addEventListener('click', test)
// function test(event) {
//   console.log(event.target);
// }

window.addEventListener('load', function() {
  displayCards();
  // cardArray();
})
sectionRight.addEventListener('click', function() {
  selectCard(event);
  flipCard(event);
  deck.moveToMatched();
});

newGameButton.addEventListener('click', reloadGame);



function displayCards() {
  deck.populateDeck(wholeDeck);
  deck.shuffle();
  deck.shuffledCards.forEach(function(card) {
    sectionRight.insertAdjacentHTML('afterbegin', `<div class="card${card.id} cards">
    <img id="${card.id}" src="assets/B img.jpg" alt="">
    </div>`)
  });
}


var timer = setInterval(countUp, 1000, time);
var time = 0;


function selectCard(event) {
  if (event.target.closest('.cards')) {
    var cardId = event.target.id;
    var cardAtHand = deck.shuffledCards.find(card => (card.id === parseInt(cardId)));
    deck.isSelected(cardAtHand)
  };
};

function flipCard(event) {
  var imgId
  var imgSrc

  if(event.target.closest('.cards')) {
    imgId = event.target.id
    imgSrc = event.target.src
  }

  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected')
    deck.shuffledCards.forEach(function(card) {
      if(card.id !== parseInt(imgId)) {
        imgSrc = card.defaultImg;
        event.target.src = imgSrc;
      }
    })
  } else if (event.target.id === imgId && deck.selectedCards.length < 3) {
    event.target.classList.add('selected')
    deck.shuffledCards.forEach(function(card) {
      if (card.id === parseInt(imgId)) {
        imgSrc = card.selectedImg;
        event.target.src = imgSrc;
      }
    })
  }
}

function updateCounter() {
  var counter = 0;
  deck.matchedCards.forEach(card => {
    counter++
  })
  matchCounter.innerHTML = counter;
}

function countUp(a) {
  console.log(time++);
  // minutesInput = parseInt((time / 60))
  secondsInput.innerHTML = `It took ${(time % 60)} seconds to match all the cards`;
  if (deck.matchedCards.length === 5) {
    console.log(deck.matchedCards.length)
    clearInterval(timer);
  }
}

function displayCongratsPage() {
  if(deck.matchedCards.length === 5) {
    mainPage.style.display = "none";
    congratsPage.style.display = "flex";
  }
}


function reloadGame() {
  congratsPage.style.display = "none";
  mainPage.style.display = "flex";
  displayCards();
  deck.matchedCards = [];
  matchCounter.innerHTML = "0";
}
