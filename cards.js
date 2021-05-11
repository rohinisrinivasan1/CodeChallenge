
function createDeck(){
  var deck = [];
  var pip = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];
  var suits = ['♡', '♣', '♢', '♠'];

  for(var sCounter=0; sCounter<4; sCounter++){
    //console.log(suits[sCounter]);
    for(var pCounter = 0; pCounter < 13; pCounter ++){
      // console.log(pip[pCounter]);
      //console.log(suits[sCounter] + pip[pCounter]);
      var suitsCreated = suits[sCounter];
      var pipCreated = pip[pCounter];
      deck.push(suitsCreated + pipCreated);
    }
  }
  //console.log(deck);
  return deck;
}

function shuffle(deck){
  for(var i=0; i<52; i++){
    var temp = deck[i];
    var randomNumber = Math.floor(Math.random() * 52);
    deck[i] = deck[randomNumber];
    deck[randomNumber] = temp;
  }
}

// var testingDeck = createDeck();
// shuffle(testingDeck);
// console.log(testingDeck);

var deal = function(){
  var deck = createDeck();
  shuffle(deck);
  console.log("SECOND SHUFFLE");
  console.log(deck);
  var card = deck.pop();
  console.log(card);
  console.log("HELLOOOOO");
  return card;
  //return shuffle(deck).splice(card, 1)[0];
}

var testingDeck = createDeck();
console.log("FIRST SHUFFLE BEGINS");
shuffle(testingDeck);
console.log(testingDeck);
console.log("FIRST SHUFFLE ENDS");
deal(testingDeck);
// console.log(testingDeck);
