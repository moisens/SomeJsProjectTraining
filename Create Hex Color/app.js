const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A', 'B','C','D', 'E', 'F'];

const btn = document.querySelector('.btnColor');
const bck = document.querySelector('body');
const hex = document.querySelector('.hex');

btn.addEventListener('click', changeColorAndHex)

function changeColorAndHex(){
   let hexColor = '#';
   for(let i=0; i<6; i++){
      let random = Math.floor(Math.random() * hexNumbers.length);
      hexColor += hexNumbers[random];
      //console.log(hexColor);
      
   }
   bck.style.backgroundColor = hexColor;
   hex.innerHTML = hexColor;
}