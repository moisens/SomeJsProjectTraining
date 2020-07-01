const sendbtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendbtn.addEventListener('click', sendMsg);

function sendMsg(){
   let content = messageIn.value;
   //console.log(content)
   
   if(content === ''){
      alert('The field must be filled!')
   }else{
      messageOut.innerHTML = content;
      messageIn.value = '';
      messageIn.focus();
   }
}