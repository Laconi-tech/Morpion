var pion = document.getElementsByClassName("cell");
let body = document.querySelector("body");
let currentPlayer = document.getElementById("currentPlayer");
let replay = document.getElementById("replay");
currentPlayer.innerHTML = "Joueur 1";
let test = "gradubide";
let CR = "X";
let num = 0;
replay.addEventListener("click", function () {
    window.location.reload();
});

console.log(num);
pion[0].onclick = function () {
    if (pion[0].innerHTML === "") {
        pion[0].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[1].onclick = function () {
    if (pion[1].innerHTML === "") {
        pion[1].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[2].onclick = function () {
    if (pion[2].innerHTML === "") {
        pion[2].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[3].onclick = function () {
    if (pion[3].innerHTML === "") {
        pion[3].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[4].onclick = function () {
    if (pion[4].innerHTML === "") {
        pion[4].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[5].onclick = function () {
    if (pion[5].innerHTML === "") {
        pion[5].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[6].onclick = function () {
    if (pion[6].innerHTML === "") {
        pion[6].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[7].onclick = function () {
    if (pion[7].innerHTML === "") {
        pion[7].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};
pion[8].onclick = function () {
    if (pion[8].innerHTML === "") {
        pion[8].innerHTML = CR;
        if (CR === "O") {
          CR = "X";
          currentPlayer.innerHTML = "Joueur 1";
        } else {
          CR = "O";
          currentPlayer.innerHTML = "Joueur 2";
        }
    }
};

checkWin();
console.log(pion[0].innerHTML);
console.log(pion[1].innerHTML);
console.log(pion[2].innerHTML);
console.log("\n");
console.log(pion[3]);
console.log(pion[4]);
console.log(pion[5]);
console.log("\n");
console.log(pion[6]);
console.log(pion[7]);
console.log(pion[8]);

function checkWin() {
    let i = 0;
    while (i < 7) {
    if (pion[i].innerHTML === pion[i+1].innerHTML && pion[i+1].innerHTML === pion[i+2].innerHTML && pion[i].innerHTML !== "") {
        //horizontale
        if (currentPlayer.innerHTML === "Joueur 1") {
            currentPlayer.innerHTML = "Joueur 2";
          } else {
            currentPlayer.innerHTML = "Joueur 1";
          }
        alert("Le joueur " + currentPlayer.innerHTML + " a gagné !");
        window.location.reload();
        return;
    }
    i++;
}
i=0;
while (i<3) {
    if (pion[i].innerHTML === pion[i+3].innerHTML && pion[i+3].innerHTML === pion[i+6].innerHTML && pion[i].innerHTML !== "") 
    {
        //verticale
        if (currentPlayer.innerHTML === "Joueur 1") {
            currentPlayer.innerHTML = "Joueur 2";
          } else {
            currentPlayer.innerHTML = "Joueur 1";
          }
        alert("Le joueur " + currentPlayer.innerHTML + " a gagné !");
        window.location.reload();
        return;
    }
    i++;
}
    
     if (pion[0].innerHTML === pion[4].innerHTML && pion[4].innerHTML === pion[8].innerHTML && pion[0].innerHTML !== "") 
    {
        //diagonale
        if (currentPlayer.innerHTML === "Joueur 1") {
            currentPlayer.innerHTML = "Joueur 2";
          } else {
            currentPlayer.innerHTML = "Joueur 1";
          }
          alert("Le joueur " + currentPlayer.innerHTML + " a gagné !");
          window.location.reload();
        return;
    }
     if (pion[2].innerHTML === pion[4].innerHTML && pion[4].innerHTML === pion[6].innerHTML && pion[2].innerHTML !== "") 
    {
        //anti-diagonale
        if (currentPlayer.innerHTML === "Joueur 1") {
            currentPlayer.innerHTML = "Joueur 2";
          } else {
            currentPlayer.innerHTML = "Joueur 1";
          }
        alert("Le joueur " + currentPlayer.innerHTML + " a gagné !");
        window.location.reload();
        return;
    }
    i++;
}
body.addEventListener("click", checkWin);
export { pion, checkWin };
