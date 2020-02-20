var card1 = new Card(1, 'assets/bey1.jpg');
var card2 = new Card(2, 'assets/bey1.jpg');
var card3 = new Card(3, 'assets/bey2.jpg');
var card4 = new Card(4, 'assets/bey2.jpg');
var card5 = new Card(5, 'assets/bey3.jpg');
var card6 = new Card(6, 'assets/bey3.jpg');
var card7 = new Card(7, 'assets/bey4.jpg');
var card8 = new Card(8, 'assets/bey4.jpg');
var card9 = new Card(9, 'assets/bey5.jpg');
var card10 = new Card(10, 'assets/bey5.jpg');
var deck = new Deck();

var sectionRight = document.querySelector('.section-right')

window.addEventListener('load', displayCards)
sectionRight.addEventListener('click', selectCard);

function displayCards() {
  deck.cards.forEach(function(card) {
    sectionRight.insertAdjacentHTML('afterbegin', `<div class="cards">
      <img id="${card.id}" src="assets/B img.jpg" alt="">
    </div>`)
  })
}

function selectCard(event) {
  if (event.target.closest('.cards')) {
    var cardId = event.target.id;
    var cardAtHand = deck.cards.find(card => (card.id === parseInt(cardId)));
    deck.isSelected(cardAtHand)
  };
};
