const sketchBox = document.querySelector('.sketchPanel');
const rows = document.getElementsByClassName('rowGrid');

const boxes = document.getElementsByClassName('boxGrid');


const tweakBtn = document.querySelector('button');
tweakBtn.addEventListener('click', remakeGrid);

makeGrid(16);
function makeGrid (gridSize) {    
    createRows(gridSize);
    createColumns(gridSize);
    let box = Array.from(boxes).forEach(div => {
        div.addEventListener('onmouseover', draw);        
    });
    
    function  draw(e) {
        e.target.classList.add('drawInk')
        console.log(e.target.className);
    }
}

function remakeGrid (){
    let newValue = prompt('Enter Number of Grid');
    if (newValue > 100) {
        alert('You can only have 100 sketch grids')
    }
    else {
    let tweakRow = Array.from(rows).forEach(row => {
            sketchBox.removeChild(row);
        })

    makeGrid(newValue);
    }
}


function createRows (rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let rowDiv = document.createElement('div');
        sketchBox.appendChild(rowDiv).className = 'rowGrid';
    } 
}

function createColumns (colNum) {
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < colNum; j++){
            let colDiv = document.createElement('div');
            rows[j].appendChild(colDiv).className = 'boxGrid';
        }

    }
}
