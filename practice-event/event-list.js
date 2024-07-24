
let c1 = document.querySelector('#cell1');
c1.addEventListener('click', changeColor);
let c2 = document.querySelector('#cell2');
c2.addEventListener('dblclick', changeColor);
let c3 = document.querySelector('#cell3');
c3.addEventListener('mouseover', changeColor);
let c4 = document.querySelector('#cell4');
c4.addEventListener('mousemove', changeColor);
let c5 = document.querySelector('#cell5');
c5.addEventListener('mouseout', changeColor);
let c6 = document.querySelector('#cell6');
c6.addEventListener('focus', changeColor);
let c7 = document.querySelector('#cell7');
c7.addEventListener('blur', changeColor);
let c8 = document.querySelector('#cell8');
c8.addEventListener('keyup', changeColor);
let c9 = document.querySelector('#cell9');
c9.addEventListener('keydown', changeColor);
let c10 = document.querySelector('#cell10');
c10.addEventListener('keypress', changeColor);
function changeColor(event) {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
  
    let color = `rgb(${r}, ${g}, ${b})`;

   
    let div = event.target;
    div.style.backgroundColor = color;
}
