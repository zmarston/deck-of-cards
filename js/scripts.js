$(document).ready(function() {
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var suits = ["Diamonds", "Clubs", "Spades", "Hearts"];
  var cards = [];
  $("#get-cards").click(function() {
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        var cardName = rank + " of " + suit;
        cards.push(cardName);
      })
    })
    cards.forEach(function(card) {
      $("#card-output").append("<li>" + card + "</li>");
    });
  });
});
