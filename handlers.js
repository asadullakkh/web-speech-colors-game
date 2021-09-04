import { colors, isValidColor } from './colors';

// const logWords = (results) => {
//   console.log(results[results.length - 1][0].transcript);
// };

export const handleResult = ({ results }) => {
  // logWords(e.results);
  const words = results[results.length - 1][0].transcript;

  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if it is a valid colour
  if (!isValidColor(color)) return; // thats all folks

  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');

  document.body.style.background = color;

};
