// script.js

const grid = document.getElementById('grid');

function buildSquare(){
    const square = document.createElement('span');
    grid.appendChild(square);
}

buildSquare();
