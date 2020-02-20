class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
  }

  checkSelectedCards() {

  }

  populateDeck(wholeDeck) {
    this.cards = wholeDeck;
  }

  moveToMatched() {

  }

  isSelected(card) {
    if (!this.selectedCards.includes(card)) {
      this.selectedCards.push(card)
      card.selected = true;
    } else if (this.selectedCards.includes(card)) {
      card.selected = false;
      var repeatCard = this.selectedCards.indexOf(card);
      this.selectedCards.slice(repeatCard);
    }
  }
}
