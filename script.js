// sketchy

const grid = document.querySelector('#grid');
let gridSize = 10;
buildGrid(gridSize);

function buttonPress(){
    gridSize = prompt("Enter a new grid size (1-100):", 1);
    if((gridSize >= 1) && (gridSize <= 100)){
        const resetGrid = grid.querySelectorAll('div');
        resetGrid.forEach((e) => {
            e.remove();
        });
        buildGrid(gridSize);
    } else {
        alert("ERROR! Grid size must be between 1-100. Try again.");
        buttonPress();
    }
}

function buildGrid(gridSize){
    let i = 1;
    let j = 1;
    while (i <= gridSize){
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = 'r' + i;
        j = 1;
        while (j <= gridSize){
            const column = document.createElement('div');
            column.classList.add('column');
            column.id = 'c' + j + 'r' + i;
            row.appendChild(column);
            j++;
        }
        grid.appendChild(row);
        i++;
    }
    const cols = document.querySelectorAll('.column');
    cols.forEach((col) => {
        col.addEventListener("mouseover", () => {
            col.classList.add('hovered');
        });
    });
}

const btn = document.getElementById("button");
btn.addEventListener("click", function(){buttonPress()});