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
      this.matchedCards.push(this.selectedCards)
      this.selectedCards = [];
      this.hideMatched(this.matchedCards)
    }
  }

  hideMatched(matchedCards) {
    console.log(matchedCards)
    for(var i = 0; i < matchedCards.length; i++) {
      var cardId = matchedCards[i];
      var idOne = cardId[0].id;
      var idTwo = cardId[1].id;  
      // var dissapear = [idOne, idTwo]
      sectionRight.querySelector(`.card${idOne}`).style.visibility = 'hidden';
      sectionRight.querySelector(`.card${idTwo}`).style.visibility = 'hidden';
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
