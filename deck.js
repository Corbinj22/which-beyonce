class Deck {
  constructor() {
    this.cards = [card1, card2,
      card3, card4, card5,
      card6, card7, card8,
      card9, card10];
    this.matchedCards = [];
    this.selectedCards = [];
}

  shuffle() {
  }

  addCard(card) {
    this.cards.push(card)
  }
  isSelected(card) {
    if(!this.selectedCards.includes(card)) {
      this.selectedCards.push(card)
    }
  }
}
