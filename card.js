class Card {
    constructor(id, img) {
        this.id = id;
        this.matched = false;
        this.selected = false;
        this.defaultImg = 'assets/B img.jpg'
        this.selectedImg = img;
    }
    match(a, b) {
        if(a === b){
            this.matched = true;
        }
    }
    isSelected(card) {
        deck.selectedCards.push(card);
        this.selected = true;
        if(this.selected = true) {
            deck.selectedCards.pop();
            this.selected = false
        }
    }


}
