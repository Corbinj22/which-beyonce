var card1 = new Card(1, 'assets/bey1.jpg');
var card2 = new Card(2, 'assets/bey1.jpg');
var card3 = new Card(3, 'assets/bey2.jpg');
var card4 = new Card(4, 'assets/bey2.jpg');
var card5 = new Card(5, 'assets/bey3.jpeg');
var card6 = new Card(6, 'assets/bey3.jpeg');
var card7 = new Card(7, 'assets/bey4.jpg');
var card8 = new Card(8, 'assets/bey4.jpg');
var card9 = new Card(9, 'assets/bey5.jpg');
var card10 = new Card(10, 'assets/bey5.jpg');
var wholeDeck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]
var deck = new Deck();

var sectionRight = document.querySelector('.section-right');
var sectionLeft = document.querySelector('.section-left');
var matchCounter = document.querySelector(".match-counter");
var congratsPage = document.querySelector('.congrats-page');

// window.addEventListener('click', test)
// function test(event) {
//   console.log(event.target);
// }

window.addEventListener('load', displayCards)
sectionRight.addEventListener('click', function() {
  selectCard(event);
  flipCard(event);
  deck.moveToMatched();
});

function displayCards() {
  deck.populateDeck(wholeDeck);
  wholeDeck.forEach(function(card) {
    sectionRight.insertAdjacentHTML('afterbegin', `<div class="card${card.id} cards">
    <img id="${card.id}" src="assets/B img.jpg" alt="">
    </div>`)
  });
}

function selectCard(event) {
  if (event.target.closest('.cards')) {
    var cardId = event.target.id;
    var cardAtHand = deck.cards.find(card => (card.id === parseInt(cardId)));
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

  console.log('SELECTED', deck.selectedCards.length);

  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected')
    deck.cards.forEach(function(card) {
      if(card.id !== parseInt(imgId)) {
        imgSrc = card.defaultImg;
        event.target.src = imgSrc;
      }
    })
  } else if (event.target.id === imgId && deck.selectedCards.length < 3) {
    event.target.classList.add('selected')
    deck.cards.forEach(function(card) {
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
  if (counter === 5) {
    gameWin();
  }
}

function gameWin() {
  sectionRight.style.display = 'none'
  sectionLeft.style.display = 'none'
  congratsPage.classList.remove('display-none')
}
