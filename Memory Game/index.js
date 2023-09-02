const cardArray = [
    {
        Name:"fries",
        img:"images/fries.png"
    },
    {
        Name:"fries",
        img:"images/fries.png"
    },
    {
        Name:"ChesseBurger",
        img:"images/cheeseburger.png"
    },
    {
        Name:"ChesseBurger",
        img:"images/cheeseburger.png"
    },
    {
        Name:"HotDog",
        img:"images/hotdog.png"
    },
    {
        Name:"HotDog",
        img:"images/hotdog.png"
    },
    {
        Name:"IceCream",
        img:"images/ice-cream.png"
    },
    {
        Name:"IceCream",
        img:"images/ice-cream.png"
    },
    {
        Name:"Milkshake",
        img:"images/milkshake.png"
    },
    {
        Name:"Milkshake",
        img:"images/milkshake.png"
    },
    {
        Name:"Pizza",
        img:"images/pizza.png"
    },
    {
        Name:"Pizza",
        img:"images/pizza.png"
    },
]

cardArray.sort(() => 0.5-Math.random())
const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
var cardChosen =  [];
var cardChosenID = []
const cardsWon = []
for(let i = 0 ; i < cardArray.length ; i++)
{
    const card = document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard);
    // console.log(card);
    gridDisplay.appendChild(card);

}

function flipCard()
{
    // console.log("Clicked"+e.target.id);
    const cardId = this.getAttribute('data-id');

    // console.log("Clicked"+cardId);
    cardChosen.push(cardArray[cardId].Name)
    cardChosenID.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2)
    {
        setTimeout(checkForMatch,500);
    }
}

function checkForMatch()
{
    const cards = document.querySelectorAll('img');
    if(cardChosenID[0] == cardChosenID[1])
    {
        cards[cardChosenID[0]].setAttribute('src','images/blank.png')
        cards[cardChosenID[1]].setAttribute('src','images/blank.png')
        alert("Select another card !!")
        // return;
    }
    else if(cardChosen[0] == cardChosen[1])
    {
        alert("One pair Found");
        cards[cardChosenID[0]].setAttribute('src','images/white.png')
        cards[cardChosenID[1]].setAttribute('src','images/white.png')

        cards[cardChosenID[0]].removeEventListener('click', flipCard)
        cards[cardChosenID[1]].removeEventListener('click', flipCard)

        cardsWon.push(cardChosen)

    }
    else
    {
        cards[cardChosenID[0]].setAttribute('src','images/blank.png')
        cards[cardChosenID[1]].setAttribute('src','images/blank.png')
        alert("Sorry try again")

    }

    resultDisplay.innerHTML = cardsWon.length
    cardChosen=[]
    cardChosenID=[]

    if(cardsWon.length == cardArray.length / 2)
    {
        resultDisplay.innerHTML = "You Won"
    }

}