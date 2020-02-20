class Card {
  constructor(id, img) {
    this.id = id;
    this.matched = false;
    this.selected = false;
    this.defaultImg = 'assets/B img.jpg'
    this.selectedImg = img;
  }

  match(a, b) {
    if(a === b) {
      this.matched = true;
    }
  }
}
