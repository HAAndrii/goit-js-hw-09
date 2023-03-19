// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let intervalId = null;


btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const date = new Date();
        if (selectedDates[0] < date.getTime()) {
            window.alert('Please choose a date in the future');
            btnStart.disabled = true;
        } else {
            btnStart.disabled = false;
        }
  },
};

flatpickr(inputDate, options);


btnStart.addEventListener('click', onbtnStart);

function onbtnStart() {
  intervalId = setInterval(start, 1000);
}

function start() {
    const distance = getDistance();
    if (distance < 0) {
        stop();
        return;
    }
    updateForm(convertMs(distance));
}
function updateForm({ days, hours, minutes, seconds }) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(string) {
    return string.padStart(2, 0);
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function getDistance () {
    const currentDate = new Date().getTime();
    const selectedDate = new Date(inputDate.value);
    return selectedDate - currentDate;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day).toString();
  // Remaining hours
  const hours = Math.floor((ms % day) / hour).toString();
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute).toString();
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second).toString();

  return { days, hours, minutes, seconds };
}
