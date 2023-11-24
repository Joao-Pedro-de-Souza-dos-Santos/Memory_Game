function backPage() {
    const playerConfirm = confirm("Deseja realmente sair? Voçê perderá seu progresso");
    if (playerConfirm) {
        window.history.back();// 👈👌 Código TopZeira autofocus //
    }
}
function createCards() {
    gridCards.innerHTML = "";
    sortedCards.forEach((card) => {
        gridCards.innerHTML += `
        <div class="card" name="${card}">
            <div class="front">
                <img src="../images/${card}.jpg" alt="">
            </div>
            <div class="back">
                <img src="../images/yugioh-card-back.png" alt="">
            </div>
        </div>
        `
    });
}

const playerNick = document.querySelector(".playerNick");
const backButton = document.querySelector(".backButton");
const gridCards = document.querySelector(".gridCards");


const storagePlayerNick = localStorage.getItem("@memoryGame:playerName");
playerNick.innerHTML = storagePlayerNick;
backButton.addEventListener("click", backPage);

const cardNames = [
    "card-1",
    "card-2",
    "card-3",
    "card-4",
    "card-5",
    "card-6",
    "card-7",
];

const arrayCardsName = cardNames
    .sort(() => Math.random() - 0.5)
    .filter((value, index) => index < 7);
const sortedCards = [...arrayCardsName,...arrayCardsName].sort(() => Math.random() - 0.5);

createCards();

console.table(arrayCardsName);
console.table(sortedCards);