const sketchBox = document.querySelector('.sketchPanel');
const rows = document.getElementsByClassName('rowGrid');

const boxes = document.getElementsByClassName('boxGrid');


const tweakBtn = document.querySelector('button');
tweakBtn.addEventListener('click', remakeGrid);


makeGrid(16);
function makeGrid (gridSize) {    
    createColumns(gridSize);

    let sDiv = document.querySelectorAll('.boxGrid');
    let arr = Array.from(sDiv).forEach(div => div.addEventListener('mouseover', draw));
}

function createColumns (colNum) {
    for(let i = 0; i < colNum; i++){
        let rowDiv = document.createElement('div');
        rowDiv.className = 'rowGrid';
        for(let j = 0; j < colNum; j++){
            let colDiv = document.createElement('div');
            colDiv.className = 'boxGrid';
            rowDiv.appendChild(colDiv)
        }
        sketchBox.appendChild(rowDiv)
    }
}

function  draw(e) {
    this.classList.add('drawInk');
}

function remakeGrid (){
    let newValue = prompt('Enter Number of Grid');
    if (newValue > 100 || newValue < 1) {
        alert('SketchUp can only have 1 to 100 grids')
    }
    else {
        let tweakRow = Array.from(rows).forEach(row => sketchBox.removeChild(row))
        makeGrid(newValue);
    }
}