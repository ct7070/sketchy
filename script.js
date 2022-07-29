// sketchy

const btn = document.getElementById("button");
const showSize = document.createElement('div');
showSize.classList.add('showSize');

const grid = document.querySelector('#grid')
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
    showSize.textContent = `${gridSize} x ${gridSize}`;
    btn.parentElement.parentElement.appendChild(showSize);
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
            for (let i = 1; i <= 10; i++){
                // console.log(col.className);
            if (!col.classList.contains('hovered')){
                col.classList.add('hovered');
                col.classList.add(`s${i}`)
                const h = getRandomNumber();
                col.style.backgroundColor = `hsl(${h}, 50%, 80%)`;
                break;
            } else if (col.classList.contains('hovered') && 
                        (col.classList.contains('s10'))){
                        col.classList.add('blackout');
                        break;
            } else if (col.classList.contains('hovered') && 
                        (!col.classList.contains(`s${i}`))){
                        col.classList.add(`s${i}`);
                        break;
            }
        }
        });
    });
}
        
function getRandomNumber() {
    const randomNumber = (maxNum) => {
        return Math.floor(Math.random() * maxNum);
    };
    return randomNumber(360);
}

btn.addEventListener("click", function(){
    const resetSize = document.querySelector('.showSize');
    resetSize.parentNode.lastChild.remove();
    buttonPress()});

showSize.textContent = `${gridSize} x ${gridSize}`;
btn.parentElement.parentElement.appendChild(showSize);