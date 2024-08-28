const themeSwitcher = document.querySelector('#theme');
const container = document.querySelector('.container');

let mode = 'light'; // Set default mode to light

themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    themeSwitcher.src = themeSwitcher.dataset.sun;
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    themeSwitcher.src = themeSwitcher.dataset.moon;
  }
});