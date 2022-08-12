var cols = 100;
var rows = 50;

var htmlElements;
var cells;
var EMPTY = 0;
var ALIVE = 1;
var cellsa = [];


function createField() {
    htmlElements = [];
    cells = [];
    var table = document.getElementById('field');

    for (var y = 0; y < rows; y++) {
        var tr = document.createElement('tr');
        var tdElements = [];
        cells.push(new Array(cols).fill(EMPTY));
        htmlElements.push(tdElements);
        table.appendChild(tr);
        for (var x = 0; x < cols; x++) {
            var td = document.createElement('td');
            tdElements.push(td);
            tr.appendChild(td);
        }
    }
}

function randomFilling() {
    var newCells = [];
    for (var i = 0; i < rows; i++) {
        newCells.push(new Array(cols).fill(EMPTY));
    }
    for (var i = 0; i < Math.floor(rows * cols * 0.3); i++) {
        var x, y;
        do {
            x = Math.floor(Math.random() * cols), y = Math.floor(Math.random() * rows);
            if (newCells[y][x] == EMPTY) {
                newCells[y][x] = ALIVE;
                break;
            }
        } while (true);
    }
    cells = newCells;
}
function fillColour() {
    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            htmlElements[y][x].setAttribute("class", (cells[y][x] == 1 ? 'filled' : 'empty'));

        }
    }
}

function countNeibhours(x, y) {
    var count = 0;
    for (dy = -1; dy <= 1; dy++) {
        for (dx = -1; dx <= 1; dx++) {
            var nx = (x + dx + cols) % cols, ny = (y + dy + rows) % rows;
            count = count + cells[ny][nx];
        }
    }
    return count - cells[y][x];
}
var index;
function newGeneration() {

    cellsa.push(cells);
    index = cellsa.length;

    var newCells = [];
    for (var i = 0; i < rows; i++) {
        newCells.push(new Array(cols).fill(EMPTY));
    }
    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            var neibhours = countNeibhours(x, y);
            if (cells[y][x] == EMPTY && neibhours == 3) {
                newCells[y][x] = ALIVE;
            }
            if (cells[y][x] == ALIVE && (neibhours == 2 || neibhours == 3)) {
                newCells[y][x] = ALIVE;
            }
        }
    }
    cells = newCells;

}
createField();


function fillRandomly() {
    randomFilling();
    fillColour();
}
function nextGen() {

    newGeneration();
    fillColour();

}

previousbtn = document.getElementById("previousbtn");

previousbtn.addEventListener("click", previous)
function previous() {
    if (index != 0) {

        index--;
    }
    console.log(index);

    cells = cellsa[index];
    fillColour();

}
function manualSet() {
    $('td').click(function () {
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        if (cells[row][col] == 1) { cells[row][col] = 0; }
        else { cells[row][col] = 1; }
    });

    $('td').click(function () {
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        if (cells[row][col] == 0) { htmlElements[row][col].removeAttribute("class", "filled"); htmlElements[row][col].setAttribute("class", "empty"); }
        else { htmlElements[row][col].removeAttribute("class", "empty"); htmlElements[row][col].setAttribute("class", "filled"); }
    });

}
var timer;
forwardspeed = document.getElementById("forward speed");

// forwardspeed.addEventListener("click",previous)
// function previous(){
//     timer=1;
// }
var myInterval;
function start() {
    var frange = document.getElementById("forward speed").value;
    document.getElementById("valueofforwardspeed").innerText=frange;
    myInterval = setInterval(nextGen,parseFloat(frange));
}


var myaInterval;
function autoPrevious() {
    var brange = document.getElementById("backward speed").value;
    document.getElementById("valueofbackwardspeed").innerText=brange;
    myaInterval = setInterval(previous, parseFloat(brange));
}

function pause1() {
    clearInterval(myInterval);

}
function pause2() {
    clearInterval(myaInterval);

}



// var reset = document.getElementById('reset_button');
// $("h1").css("color", "white");


function glider() {
    var newCells = [];
    for (var i = 0; i < rows; i++) {
        newCells.push(new Array(cols).fill(EMPTY));
    }

    newCells[3][1] = 1; newCells[4][2] = 1; newCells[4][3] = 1; newCells[3][3] = 1; newCells[2][3] = 1;


    cells = newCells;
    fillColour();
}

function pulsar() {
    var newCells = [];
    for (var i = 0; i < rows; i++) {
        newCells.push(new Array(cols).fill(EMPTY));
    }



    newCells[6][40 + 34] = 1;

    newCells[7][23 + 34] = 1; newCells[7][39 + 34] = 1; newCells[7][41 + 34] = 1;

    newCells[8][13 + 34] = 1; newCells[8][15 + 34] = 1; newCells[8][22 + 34] = 1;
    newCells[8][28 + 34] = 1; newCells[8][29 + 34] = 1; newCells[8][38 + 34] = 1;




    newCells[9][13 + 34] = 1; newCells[9][18 + 34] = 1; newCells[9][23 + 34] = 1; newCells[9][25 + 34] = 1; newCells[9][26 + 34] = 1; newCells[9][27 + 34] = 1; newCells[9][28 + 34] = 1; newCells[9][29 + 34] = 1; newCells[9][30 + 34] = 1; newCells[9][35 + 34] = 1; newCells[9][36 + 34] = 1;


    newCells[10][13 + 34] = 1; newCells[10][15 + 34] = 1; newCells[10][16 + 34] = 1; newCells[10][17 + 34] = 1; newCells[10][18 + 34] = 1; newCells[10][19 + 34] = 1; newCells[10][20 + 34] = 1; newCells[10][21 + 34] = 1; newCells[10][22 + 34] = 1; newCells[10][33 + 34] = 1; newCells[10][36 + 34] = 1; newCells[10][38 + 34] = 1; newCells[10][39 + 34] = 1; newCells[10][40 + 34] = 1;


    newCells[11][16 + 34] = 1; newCells[11][22 + 34] = 1; newCells[11][30 + 34] = 1; newCells[11][31 + 34] = 1; newCells[11][32 + 34] = 1; newCells[11][33 + 34] = 1; newCells[11][38 + 34] = 1; newCells[11][39 + 34] = 1; newCells[11][40 + 34] = 1;


    newCells[12][11 + 34] = 1; newCells[12][12 + 34] = 1; newCells[12][30 + 34] = 1; newCells[12][31 + 34] = 1; newCells[12][32 + 34] = 1; newCells[12][34 + 34] = 1;


    newCells[13][8 + 34] = 1; newCells[13][11 + 34] = 1; newCells[13][12 + 34] = 1; newCells[13][20 + 34] = 1; newCells[13][21 + 34] = 1; newCells[13][30 + 34] = 1; newCells[13][31 + 34] = 1;

    newCells[14][8 + 34] = 1; newCells[14][11 + 34] = 1;
    newCells[15][7 + 34] = 1;


    newCells[6 + 18][40 + 34] = 1;

    newCells[7 + 16][23 + 34] = 1; newCells[7 + 16][39 + 34] = 1; newCells[7 + 16][41 + 34] = 1;

    newCells[8 + 14][13 + 34] = 1; newCells[8 + 14][15 + 34] = 1; newCells[8 + 14][22 + 34] = 1;
    newCells[8 + 14][28 + 34] = 1; newCells[8 + 14][29 + 34] = 1; newCells[8 + 14][38 + 34] = 1;




    newCells[9 + 12][13 + 34] = 1; newCells[9 + 12][18 + 34] = 1; newCells[9 + 12][23 + 34] = 1; newCells[9 + 12][25 + 34] = 1; newCells[9 + 12][26 + 34] = 1; newCells[9 + 12][27 + 34] = 1; newCells[9 + 12][28 + 34] = 1; newCells[9 + 12][29 + 34] = 1; newCells[9 + 12][30 + 34] = 1; newCells[9 + 12][35 + 34] = 1; newCells[9 + 12][36 + 34] = 1;


    newCells[10 + 10][13 + 34] = 1; newCells[10 + 10][15 + 34] = 1; newCells[10 + 10][16 + 34] = 1; newCells[10 + 10][17 + 34] = 1; newCells[10 + 10][18 + 34] = 1; newCells[10 + 10][19 + 34] = 1; newCells[10 + 10][20 + 34] = 1; newCells[10 + 10][21 + 34] = 1; newCells[10 + 10][22 + 34] = 1; newCells[10 + 10][33 + 34] = 1; newCells[10 + 10][36 + 34] = 1; newCells[10 + 10][38 + 34] = 1; newCells[10 + 10][39 + 34] = 1; newCells[10 + 10][40 + 34] = 1;


    newCells[11 + 8][16 + 34] = 1; newCells[11 + 8][22 + 34] = 1; newCells[11 + 8][30 + 34] = 1; newCells[11 + 8][31 + 34] = 1; newCells[11 + 8][32 + 34] = 1; newCells[11 + 8][33 + 34] = 1; newCells[11 + 8][38 + 34] = 1; newCells[11 + 8][39 + 34] = 1; newCells[11 + 8][40 + 34] = 1;


    newCells[12 + 6][11 + 34] = 1; newCells[12 + 6][12 + 34] = 1; newCells[12 + 6][30 + 34] = 1; newCells[12 + 6][31 + 34] = 1; newCells[12 + 6][32 + 34] = 1; newCells[12 + 6][34 + 34] = 1;


    newCells[13 + 4][8 + 34] = 1; newCells[13 + 4][11 + 34] = 1; newCells[13 + 4][12 + 34] = 1; newCells[13 + 4][20 + 34] = 1; newCells[13 + 4][21 + 34] = 1; newCells[13 + 4][30 + 34] = 1; newCells[13 + 4][31 + 34] = 1;

    newCells[14 + 2][8 + 34] = 1; newCells[14 + 2][11 + 34] = 1;

    cells = newCells;
    fillColour();
}

function rPentomino() {
    var newCells = [];
    for (var i = 0; i < rows; i++) {
        newCells.push(new Array(cols).fill(EMPTY));
    }

    newCells[26][50] = 1; newCells[26][51] = 1; newCells[27][49] = 1; newCells[27][50] = 1; newCells[28][50] = 1;



    cells = newCells;
    fillColour();
}

function lightWeightShip() {
    var newCells = [];
    for (var i = 0; i < rows; i++) {
        newCells.push(new Array(cols).fill(EMPTY));
    }

    newCells[26][51] = 1; newCells[26][54] = 1; newCells[27][50] = 1; newCells[28][50] = 1; newCells[28][54] = 1;
    newCells[29][50] = 1;
    newCells[29][51] = 1;
    newCells[29][52] = 1;
    newCells[29][53] = 1;

    cells = newCells;
    fillColour();
}

//  export {cells};