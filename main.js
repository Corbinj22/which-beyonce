var card1 = new Card('assets/bey1.jpg');
var card2 = new Card('assets/bey1.jpg');
var card3 = new Card('assets/bey2.jpg');
var card4 = new Card('assets/bey2.jpg');
var card5 = new Card('assets/bey3.jpg');
var card6 = new Card('assets/bey3.jpg');
var card7 = new Card('assets/bey4.jpg');
var card8 = new Card('assets/bey4.jpg');
var card9 = new Card('assets/bey5.jpg');
var card10 = new Card('assets/bey5.jpg');
var deck = new Deck();
var sectionRight = document.querySelector('.section-right')

window.addEventListener('load', displayCards)

function displayCards() {
  deck.cards.forEach(function(card) {
    sectionRight.insertAdjacentHTML('afterbegin', `<div class="card1 cards">
      <img src="assets/B img.jpg" alt="">
    </div>`)

  })
}
