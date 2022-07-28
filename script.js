// sketchy

const grid = document.querySelector('#grid');

function buildGrid(){
    let i = 1;
    let j = 1;
    while (i <= 16){
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = 'r' + i;
        j = 1;
        while (j <= 16){
            const column = document.createElement('div');
            column.classList.add('column');
            column.id = 'c' + j + 'r' + i;
            row.appendChild(column);
            j++;
        }
        grid.appendChild(row);
        i++;
    }
}

buildGrid();

const rows = document.querySelectorAll(".row");
const cols = document.querySelectorAll('.column');

cols.forEach( (col) => {
    col.addEventListener("mouseover", () => {
        col.classList.add('hovered');
    });
});