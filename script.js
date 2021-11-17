let btn = document.getElementById('btn');
btn.addEventListener('click', colorChange);

let color = document.querySelector("#color");

function colorChange() {
    shape.style.backgroundColor = color.value;
}

let shape = document.querySelector('.shape');

let shapeSelect = document.getElementById('shape-select');
shapeSelect.addEventListener('change', shapeChange);

function  shapeChange(event) {
    shape.className = event.target.value;
}
//

