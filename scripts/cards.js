const playerNick = document.querySelector(".playerNick");
const storagePlayerNick = localStorage.getItem("@memoryGame:playerName");
playerNick.innerHTML = storagePlayerNick;