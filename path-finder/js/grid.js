const CellType = {
    NONE: 0,
    PLAIN: 1,
    BLOCKED: 2,
    START: 3,
    END: 4
 };
 Object.freeze(CellType);

var currentAlgorithm = aStar;
var activeType = CellType.BLOCKED;
var mouseIsDown = false;
var startCell = null;
var endCell = null;
var rowCount = 20;
var colCount = 40;
var gridMatrix = [];
var selectedBtn = document.getElementById("block-btn");

function generateGrid(){
    var gridDiv = document.getElementById("grid-div");
    if(document.getElementById("grid")){
        gridDiv.removeChild(document.getElementById("grid"));
        gridMatrix = [];
    }
    var grid = document.createElement("table");
    grid.id = "grid";
    var gridBody = document.createElement("tbody");
    grid.appendChild(gridBody);

    for(i=0; i<rowCount; i++){
        var gridRow = document.createElement('tr');
        var rowArray = [];
        for(j=0; j<colCount; j++){
            var gridCell = document.createElement('td');
            gridCell.classList.add("grid-cell");
            if(i === 0 && j === 0){
                gridCell.classList.add("start");
                startCell = gridCell;
            }else if(i === rowCount-1 && j === colCount-1){
                gridCell.classList.add("end");
                endCell = gridCell
            }else{
                gridCell.classList.add("plain");
            }
            gridCell.addEventListener("mousedown", mouseDown);
            gridCell.addEventListener("mouseover", mouseOver);
            gridCell.addEventListener("mouseup", mouseUp);
            gridCell.dataset.x = j;
            gridCell.dataset.y = i;
            gridRow.appendChild(gridCell);
            rowArray.push(gridCell);
        }
        gridBody.appendChild(gridRow);
        gridMatrix.push(rowArray);
    }
    gridDiv.appendChild(grid);
}

function mouseDown(){
    mouseIsDown = true;
    if(activeType === CellType.PLAIN && this.classList.contains("blocked")){
        this.classList.remove("blocked");
        this.classList.add("plain");
    }else if(activeType === CellType.BLOCKED && this.classList.contains("plain")){
        this.classList.remove("plain");
        this.classList.add("blocked");
    }else if(activeType === CellType.START && (this.classList.contains("blocked") || this.classList.contains("plain"))){
        startCell.classList.remove("start");
        startCell.classList.add("plain");
        if(this.classList.contains("plain")){
            this.classList.remove("plain");
        }else{
            this.classList.remove("blocked");
        }
        this.classList.add("start");
        startCell = this;
    }else if(activeType === CellType.END && (this.classList.contains("blocked") || this.classList.contains("plain"))){
        endCell.classList.remove("end");
        endCell.classList.add("plain");
        if(this.classList.contains("plain")){
            this.classList.remove("plain");
        }else{
            this.classList.remove("blocked");
        }
        this.classList.add("end");
        endCell = this;
    }
}

function mouseUp() {
    mouseIsDown = false;
}

function mouseOver(){
    if(mouseIsDown && activeType === CellType.BLOCKED && this.classList.contains("plain")){
        this.classList.remove("plain");
        this.classList.add("blocked");
    }else if( mouseIsDown && activeType === CellType.PLAIN && this.classList.contains("blocked")){
        this.classList.remove("blocked");
        this.classList.add("plain");
    }
}

function runAlgorithm(){
    currentAlgorithm(gridMatrix, startCell, endCell);
}

function blockedBtn(){
    activeType = CellType.BLOCKED;
    selectedBtn.classList.remove("selected");
    let btn = document.getElementById("block-btn");
    btn.classList.add("selected");
    selectedBtn = btn;
}

function plainBtn(){
    activeType = CellType.PLAIN;
    selectedBtn.classList.remove("selected");
    let btn = document.getElementById("erase-btn");
    btn.classList.add("selected");
    selectedBtn = btn;
}

function startBtn(){
    activeType = CellType.START;
    selectedBtn.classList.remove("selected");
    let btn = document.getElementById("start-btn");
    btn.classList.add("selected");
    selectedBtn = btn;
}

function endBtn(){
    activeType = CellType.END;
    selectedBtn.classList.remove("selected");
    let btn = document.getElementById("end-btn");
    btn.classList.add("selected");
    selectedBtn = btn;
}

// function dropdownAStar(){
//     currentAlgorithm = aStar;
//     var span = document.getElementById("algorithm-span").innerHTML = "A*";
// }

// function dropdownDijkstra(){
//     currentAlgorithm = dijkstra;
//     var span = document.getElementById("algorithm-span").innerHTML = "Dijkstra";
// }

function dropdownBFS(){
    currentAlgorithm = breadthFirstSearch;
    var span = document.getElementById("algorithm-span").innerHTML = "BFS";
}


window.addEventListener("load", generateGrid);