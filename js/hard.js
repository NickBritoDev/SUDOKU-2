
var numSelected = null;
var tileSelected = null;

var errors = "game over -click para continuar-" ;

var board = [
  "4--23---9",
  "3-8-6-4--",
  "--64--7--",
  "89-5---6-",
  "7--------",
  "---91---7",
  "--8-41---",
  "-1----8-2",
  "-43-6--7-"
]

var solution = [
  "415237689",
  "378169425",
  "296485731",
  "893574162",
  "751236984",
  "624918357",
  "928741356",
  "617593842",
  "543862179"
]

window.onload = function() {
  setGame();
}

function setGame() {
  //digits 1-9
  for(let i = 1; i<=9; i++) {
    let number = document.createElement("div");
    number.id = i
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  //board 9x9
  for(let r = 0; r < 9; r++) {
    for(let c=0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if(board[r][c] != "-"){
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if(r == 2 || r == 5){
        tile.classList.add("horizontal-line");
      }
      if(c == 2 || c == 5){
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber(){
  if(numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile(){
  if(numSelected){
    if(this.innerText != ""){
      return;
    }
    this.innerText = numSelected.id;
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if(solution[r][c] == numSelected.id) {
      this.innerText = numSelected.id;
    }
    else{
      errors += 1;
      document.getElementById("errors").innerText = errors;
    }
  }
}