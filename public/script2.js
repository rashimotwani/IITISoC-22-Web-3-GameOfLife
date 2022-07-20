
var size = 30;
var htmlElements;
var cells;
var EMPTY = 0;
var ALIVE = 1;

function createField() {
    htmlElements = [];
    cells = [];
    var table = document.getElementById('field');
    for (var y = 0; y < size; y++) {
        var tr = document.createElement('tr');
        var tdElements = [];
        cells.push(new Array(size).fill(EMPTY));
        htmlElements.push(tdElements);
        table.appendChild(tr);
        for (var x = 0; x < size; x++) {
            var td = document.createElement('td');
            tdElements.push(td);
            tr.appendChild(td);
        }
    }
}

function randomFilling() {
    var newCells = [];
    for (var i = 0; i < size; i++) {
        newCells.push(new Array(size).fill(EMPTY));
    }
    for (var i = 0; i < Math.floor(size * size * 0.3); i++) {
        var x, y;
        do {
            x = Math.floor(Math.random() * size), y = Math.floor(Math.random() * size);
            if (newCells[y][x] == EMPTY) {
                newCells[y][x] = ALIVE;
                break;
            }
        } while (true);
    }
    cells=newCells;
}
function fillColour() {
    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            htmlElements[y][x].setAttribute("class", (cells[y][x] == 1 ? 'filled' : 'empty'));

        }
    }
}

function countNeibhours(x, y) {
    var count = 0;
    for (dy = -1; dy <= 1; dy++) {
        for (dx = -1; dx <= 1; dx++) {
            var nx = (x + dx + size) % size, ny = (y + dy + size) % size;
            count = count + cells[ny][nx];
        }
    }
    return count - cells[y][x];
}

function newGeneration() {
    var newCells = [];
    for (var i = 0; i < size; i++) {
        newCells.push(new Array(size).fill(EMPTY));
    }
    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
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
function manualSet() {
        $('td').click(function(){
            var col = $(this).parent().children().index($(this));
            var row = $(this).parent().parent().children().index($(this).parent());
           if(cells[row][col]==1){cells[row][col]=0;}
           else{cells[row][col]=1;}
          });
    
          $('td').click(function(){
            var col = $(this).parent().children().index($(this));
            var row = $(this).parent().parent().children().index($(this).parent());
           if(cells[row][col]==0){htmlElements[row][col].removeAttribute("class","filled");htmlElements[row][col].setAttribute("class","empty");}
           else{htmlElements[row][col].removeAttribute("class","empty");htmlElements[row][col].setAttribute("class","filled");}
          });
    }
var myInterval;
    function start(){
        myInterval= setInterval(nextGen,100);
    }
 function pause(){
    clearInterval(myInterval);

 }



    var reset = document.getElementById('reset_button');
    $("h1").css("color", "white");


