function backPageRank() {
    window.history.back();
}

const backButtonRank = document.querySelector(".backButtonRank");
backButtonRank.addEventListener("click",backPageRank);