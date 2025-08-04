const input = document.getElementById('ip');
const output = document.getElementById('output');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  output.textContent = '';
  const num = Number(input.value);
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      })
    })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      })
    })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      })
    })
    .then(value => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      })
    })
})
