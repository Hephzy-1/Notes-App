const notesCon = document.querySelector('.notes');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener('click', ()=> {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contentditable', 'true');
  img.src = 'img/delete-removebg-preview.png';
  notesCon.appendChild(inputBox).appendChild(img);
})

notesCon.addEventListener('click', function(e){
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
  }
})