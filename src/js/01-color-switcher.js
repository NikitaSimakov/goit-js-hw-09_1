const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let backgroundSwitchIntervalId = null;
const INTERVAL_DELAY = 1000;

refs.startBtn.addEventListener('click', onStartButtonClick);
refs.stopBtn.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  backgroundSwitchIntervalId = setInterval(
    backgroundColorSwitch,
    INTERVAL_DELAY
  );
  refs.startBtn.disabled = true;
  refs.startBtn.classList.add('btn-link');
  refs.startBtn.classList.remove('btn-primary');
}

function onStopButtonClick() {
  clearInterval(backgroundSwitchIntervalId);
  refs.startBtn.disabled = false;
  refs.startBtn.classList.remove('btn-link');
  refs.startBtn.classList.add('btn-primary');
}

function backgroundColorSwitch() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
