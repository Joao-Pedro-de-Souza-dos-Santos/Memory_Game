function backPageRank() {
    window.history.back();
}

function createBodyTableRank() {
    const storageRank = JSON.parse(localStorage.getItem("@memoryGame:rank"));

    let rankSorted;

    if (storageRank) {
        rankSorted = storageRank.sort((x, y) => {
            if (x.time > y.time) return 1; 
            if (y.time > x.time) return -1; 
            return 0;}).filter((value, index) => {
            index < 3;
        });
        } else {
            console.log("todo mundo doidao");
        }

        bodyTableRank.innerHTML = "";
        for (let z = 0; z < 10; z++) {
          bodyTableRank.innerHTML += `
          
            <tr>
                <td>${z + 1}</td>
                <td>${rankSorted ? rankSorted[z]?.player || "" : ""}</td>
                <td>${rankSorted ? rankSorted[z]?.time || "" : ""}</td>
            </tr>
          `;  
        }

        console.log(rankSorted);
}

const backButtonRank = document.querySelector(".backButtonRank");
const bodyTableRank = document.querySelector(".tableRank tbody");

backButtonRank.addEventListener("click",backPageRank);

createBodyTableRank();
