const sketchBox = document.querySelector('.sketchPanel');
const rows = document.getElementsByClassName('rowGrid');


const tweakBtn = document.querySelector('button');
tweakBtn.addEventListener('click', remakeGrid);

const clearBtn = document.querySelector('.clearGrid');
clearBtn.addEventListener('click', clearGrid);

const rbwCheck = document.getElementById('rbwSwitch');
rbwCheck.addEventListener('click', addRainbowColor);

let isColored = false;

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
            rowDiv.appendChild(colDiv);
        }
        sketchBox.appendChild(rowDiv);
    }
}

function draw(e) {
    if (rbwCheck.checked) {
        let rgb = addRainbowColor();
        this.style.backgroundColor = rgb;
        this.style.borderColor = rgb;
    } else {
        let color = '#000000';
        this.style.backgroundColor = color;
        this.style.borderColor = color;
    }
    isColored = true;
}

function addRainbowColor() {
    const randomRGB = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomRGB(0, 255);
    const g = randomRGB(0, 255);
    const b = randomRGB(0, 255);
    const rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
}

function clearGrid() {
    if (isColored) {
        const grid = document.getElementsByClassName("boxGrid");
        gridDiv = Array.from(grid).forEach(div => div.style = null);
        isColored = false;
    }
}

function remakeGrid() {
    let newValue = prompt('Enter Number of Grid');
    if ((newValue % 1) != 0) {
        alert('You can only enter numbers');
    }
    else if (newValue > 100 || newValue < 1) {
        alert('SketchUp can only have 1 to 100 grids');
    }
    else {
        let tweakRow = Array.from(rows).forEach(row => sketchBox.removeChild(row));
        makeGrid(newValue);
    }
}