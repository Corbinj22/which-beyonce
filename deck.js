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
    console.log(this.selectedCards)
    if (this.selectedCards[0].selectedImg === this.selectedCards[1].selectedImg) {
      this.selectedCards[0].matched = true
      this.selectedCards[1].matched = true
      console.log(this.selectedCards);
      this.matchedCards.push(this.selectedCards)
      console.log(this.matchedCards.length);
      this.hideMatched(this.matchedCards)
    }
  }

  hideMatched(cards) {
    console.log(cards.length)
    for(var i = 0; i < cards.length; i++) {
      console.log(cards)
      var id = cards[i].id;
      console.log(id);
      document.getElementById(`#${id}`).style.visibility = 'hidden';
    console.log(document.getElementById(`#${id}`))
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
