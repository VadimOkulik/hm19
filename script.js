const moduleWindow = document.getElementById('win-show');
const buttonEnter = document.getElementById('btn');
const buttonClose = document.getElementById('btn-close');

buttonEnter.addEventListener('click', () => {moduleWindow.style.visibility = "visible"});
buttonClose.addEventListener('click', () => {moduleWindow.style.visibility = "hidden"});