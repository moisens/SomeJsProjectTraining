const colorBtn = document.querySelector('.btnColor');
const bodyBck = document.querySelector('body');

const colours = ['lightgreen', 'corail', 'lightblue', '#343a40', '#17a2b8', '#ffc107', '#dc3545'];

colorBtn.addEventListener('click', clickAndChangeColor);

function clickAndChangeColor(){
   let random = Math.floor(Math.random() * colours.length);
   bodyBck.style.backgroundColor = colours[random];
   
}
