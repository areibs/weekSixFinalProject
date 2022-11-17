//class for player -name, hand [], score
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}
let player1 = new Player("Billy");
//console.log("player1:", player1)

let player2 = new Player("Bob");
//console.log("player2:", player2);

//create a deck including suits, face values, ranks
//method to create deck, method to shuffle deck and then deal the deck

class Deck {
    constructor() {
        this.suits = ["hearts", "diamonds", "clubs", "spades"]
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//rank the face value of cards
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        //full deck
        this.deck = [];
    }

    createDeck() {
        //create a for loop to iterate over suits to create a deck
        for (let s = 0; s < this.suits.length; s++) {
            //console.log(this.suits[s])
            //create a for loop to iterate over face values
            for (let f = 0; f < this.faceValues.length;f ++) {
                //console.log(this.faceValues[f])
                //variable for a suit
                const suit = this.suits[s];
                const faceValue = this.faceValues[f];
                const rank = this.ranks[f];

                //push each card variable in the loop to the deck
                this.deck.push({suit, faceValue, rank});

            }

        }
        console.log("printing deck of cards:", this.deck)
    }
    //shuffle the deck
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i]
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    dealDeck() {
        player1.hand = this.deck.slice(0, 26);
        //console.log("player 1 hand, 26 cards": player1.hand); shows cards in player 1s hand
        player2.hand = this.deck.slice(26, 52);
        console.log("player 2 hand:", player2.hand)

    }
}

let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.dealDeck();
///console.log(gameDeck);

class Game {
    //using methods for game

    //need a method to compare cards, and to determine a winner

    compareCards() {
        for(let round = 0; round < 26; round ++) {
            ///console.log(round);
            console.log(player1.name, player1.hand[round])
            console.log(player2.name, player2.hand[round])
            if (player1.hand[round].rank > player2.hand[round].rank) {
                //add to player1 score
                player1.score += 1;
                console.log(`${player1.name} score : ${player1.score}`)
                console.log(`${player2.name} score : ${player2.score}`)
                console.log(`${player1.name} is the winner!
                
                `)


            } else if (player2.hand[round].rank > player1.hand[round].rank) {
                player2.score += 1;
                console.log(`${player1.name} score : ${player1.score}`)
                console.log(`${player2.name} score : ${player2.score}`)
                console.log(`${player2.name} is the winner!
                
                `)
            } else {
                console.log(`${player1.name} score : ${player1.score}`)
                console.log(`${player2.name} score : ${player2.score}`)
                console.log(`${player1.name} and ${player2.name} tied this round!
                
                
                `)

            }


        }
    }
    determineWinner() {
        //to check to see if player1 score is greater than or tied to player2
        if (player1.score > player2.score) {
            console.log(`${player1.name} is the official winner with ${player1.score} points!!`)
        } else if (player2.score > player1.score) {
            console.log(`${player2.name} is the official winner with ${player2.score} points!`)
        } else {
            console.log(`${player1.name} and ${player2.name} are tied with ${player1.score} points!`)
        }
    }
}

let playGame = new Game();
playGame.compareCards();
playGame.determineWinner();



