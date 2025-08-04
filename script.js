//your JS code here. If required.
const input = document.getElementById('ip');
const output = document.getElementById('output');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  output.textContent = '';
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = input.value;
      resolve(input.value);
    }, 2000);
  })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.textContent = value * 2;
          resolve(value * 2);
        }, 2000);
      })
    })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.textContent = value - 3;
          resolve(value - 3);
        }, 1000);
      })
    })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.textContent = value / 2;
          resolve(value / 2);
        }, 1000);
      })
    })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.textContent = value + 10;
          resolve(value + 10);
        }, 1000);
      })
    })
})
