import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
console.log(Notiflix);

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  startButton: document.querySelector('[data-start]'),
  input: document.querySelector('input#datetime-picker'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const date = Date.now();
    differenceTime = selectedDates[0] - date;
    if (differenceTime < 0) {
      refs.startButton.disabled = true;
      Notiflix.Notify.warning('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
    }
  },
};
let differenceTime = null;
let intervalId = null;

refs.startButton.addEventListener('click', onStartButtonClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function changeTextContent({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function onStartButtonClick() {
  intervalId = setInterval(updateCountDown, 1000);
  refs.startButton.disabled = true;
  refs.input.disabled = true;
}

function updateCountDown() {
  differenceTime -= 1000;
  const countdownTime = convertMs(differenceTime);
  if (differenceTime < 999) {
    clearInterval(intervalId);
    refs.input.disabled = false;
    refs.startButton.disabled = false;
  }

  changeTextContent(countdownTime);
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

flatpickr(refs.input, options);
