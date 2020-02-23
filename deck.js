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

  moveToMatched(event) {
    if (this.selectedCards[0].selectedImg === this.selectedCards[1].selectedImg) {
      this.selectedCards[0].matched = true
      this.selectedCards[1].matched = true
      this.matchedCards.push(this.selectedCards)
    }
  }

  isSelected(card) {
    if (!this.selectedCards.includes(card)) {
      this.selectedCards.push(card)
      card.selected = true;
    } else if (this.selectedCards.includes(card)) {
      card.selected = false;
      var repeatCard = this.selectedCards.indexOf(card);
      this.selectedCards.splice(repeatCard, 1);
    }
  }
}
