const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const doc = document.querySelector('body');
let timerId = null;

start.disabled = true;
btnDisabled();

function btnDisabled() {
    start.disabled = !start.disabled;
    stop.disabled = !stop.disabled;    
}

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

function onStart() {
    if (!!timerId) {
        return; 
    }
    timerId = setInterval(setBgColor, 1000);
    btnDisabled();
}

function setBgColor() {
    doc.style.backgroundColor = getRandomHexColor();
}

function onStop() {
    clearInterval(timerId);
    btnDisabled();
    timerId = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
