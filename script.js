// sketchy

const grid = document.getElementById('grid');

function buildGrid(){
    let i = 1;
    let j = 1;
    while (i <= 16){
        const row = document.createElement('div');
        row.classList.add('row' + i);
        j = 1;
        while (j <= 16){
            const column = document.createElement('div');
            column.classList.add('column' + j);
            row.appendChild(column);
            j++;
        }
        grid.appendChild(row);
        i++;
    }
}

buildGrid();
