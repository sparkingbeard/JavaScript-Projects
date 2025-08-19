const startBtn = document.getElementById('startBtn');
const gridContainer = document.getElementById('gridContainer');
const errorMessage = document.getElementById('errorMessage');
const restartBtn = document.getElementById("restartBtn");
const inputCards = document.getElementById('inputCards');

let totalCards;
let cardValues = [];
let flippedCards = [];
let matchedCards = 0;

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', () => location.reload());

function startGame() {
    errorMessage.textContent = '';
    totalCards = parseInt(inputCards.value);

    //checking if the value of input is even, range between 4 and 100 or not
    if (!totalCards || totalCards % 2 != 0 || totalCards < 4 || totalCards > 100) {
        errorMessage.textContent = 'Please enter the proper input number i.e an even number between 4 and 100';
        return;
    }

    // generating number pairs for cards here
    let numbers = [];
    for (let i = 1; i <= totalCards / 2; i++) {
        numbers.push(i, i);
    }

    // now we will shuffle the pairs in numbers array in random order and assingn it to cardValues array
    cardValues = numbers.sort(() => 0.5 - Math.random());

    // grid setup
    let columns = Math.floor(Math.sqrt(totalCards));
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 60px)`

    // creating cards as per requirements inside grid container
    gridContainer.innerHTML = '';
    cardValues.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.dataset.index = index;
        card.addEventListener('click', handleCardClick);
        gridContainer.appendChild(card);
    })
}

function handleCardClick(e) {
    const card = e.target;

    // block the card if the card is already flipped
    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length === 2) {
        return;
    }

    card.classList.add('flipped');
    card.textContent = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards = matchedCards + 2;
        if (matchedCards === totalCards) {
            alert("Hurray, You have won the game as all cards are matched");
            restartBtn.style.display = 'inline-block';
            inputCards.style.display = 'none';
            startBtn.style.display = 'none';

        }
    } else {
        card1.classList.remove('flipped');
        card1.textContent = "";
        card2.classList.remove('flipped');
        card2.textContent = "";
    }

    flippedCards = [];
}







