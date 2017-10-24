$(document).ready(function() {
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var suits = ["Diamonds", "Clubs", "Spades", "Hearts"];
  var cards = [];
  $("#get-cards").click(function() {
    for (var index = 0; index <= suits.length; index ++);
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        var cardName = rank + " of " + suit;
        cards.push(cardName);
      })
    });
    for (var index = 0; index <= 0; index ++) {
    $("#card-output").append("<li>" + cards + "</li>");
    };
  });
});
