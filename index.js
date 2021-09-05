import { handleResult } from './handlers.js';
import { isDark, colorsByLength } from './colors.js';

const colorsEl = document.querySelector('.colors');

const displayColors = (colors) =>
  colors
    .map(
      (color) =>
        `<span class='color ${color} ${
          isDark(color) ? 'dark' : ''
        }' style='background: ${color}'>${color}</span>`
    )
    .join('');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const start = () => {
  if (!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support speech recognition(');
    return;
  }
  console.log('Starting...');

  // make a new speech
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
  console.log(recognition);
};

start();
colorsEl.innerHTML = displayColors(colorsByLength);
