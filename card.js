class Card {
  constructor(id, img) {
    this.id = id;
    this.matched = false;
    this.selected = false;
    this.defaultImg = 'assets/B img.jpg'
    this.selectedImg = img;
  }

  match(cardA, cardB) {
    if(cardA === cardB) {
      this.matched = true;
    }
  }
}
