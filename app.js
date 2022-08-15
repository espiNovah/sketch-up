const sketchBox = document.querySelector('.sketchPanel');
const rows = document.getElementsByClassName('rowGrid');

let isColored = false;

const tweakBtn = document.querySelector('button');
tweakBtn.addEventListener('click', remakeGrid);

const clearBtn = document.querySelector('.clearGrid');
clearBtn.addEventListener('click', clearGrid);


makeGrid(16);
function makeGrid(gridSize) {
    createColumns(gridSize);

    let sDiv = document.querySelectorAll('.boxGrid');
    let arr = Array.from(sDiv).forEach(div => div.addEventListener('mouseover', draw));
}

function createColumns(colNum) {
    for (let i = 0; i < colNum; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'rowGrid';
        for (let j = 0; j < colNum; j++) {
            let colDiv = document.createElement('div');
            colDiv.className = 'boxGrid';
            rowDiv.appendChild(colDiv)
        }
        sketchBox.appendChild(rowDiv)
    }
}

function draw(e) {
    this.classList.add('drawInk');
    isColored = true;
}

function clearGrid() {
    if (isColored) {
        const grid = document.getElementsByClassName("drawInk");
        console.log(grid);
        gridDiv = Array.from(grid).forEach(div => div.classList.remove('drawInk'));
        isColored = false;
    } return;
}

function remakeGrid() {
    let newValue = prompt('Enter Number of Grid');
    if ((newValue % 1) != 0) {
        alert('You can only enter numbers')
    }
    else if (newValue > 100 || newValue < 1) {
        alert('SketchUp can only have 1 to 100 grids')
    }
    else {
        let tweakRow = Array.from(rows).forEach(row => sketchBox.removeChild(row))
        makeGrid(newValue);
    }
}