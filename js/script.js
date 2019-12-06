// document.addEventListener('DOMContentLoaded', function(event) {});
window.addEventListener('load', () => {
  let html = '';
  for (let i = 1; i < 201; i++) {
    html += `<div class="blue boxes"></div>`;
    if (i % 20 === 0) {
      continue;
    }
    if (i % 10 === 0) {
      html += `<div class="dark-blue boxes"></div>`;
    }
    html += `<div class="dark-blue boxes"></div>`;
  }
  document.querySelector('#game-board').innerHTML = html;
  const boxes = document.getElementsByClassName('boxes');
  const snake = [];
  let mySnake = document.getElementsByClassName('snake');
  let dir;
  let ind = 208;
  snake[0] = ind;
  let indRemove = 208;

  function getIndex(index) {
    snake.unshift(index);
    snake.pop();
    // for (let i = 0; i < boxes.length; i++) {
    // snake[208] = boxes[208].classList.add('snake');
    // if (dir === 'LEFT') {
    //   let rm = index - 1;
    //   boxes[208].classList.remove('snake');
    //   boxes[index].classList.add('snake');
    //   boxes[rm].classList.remove('snake');
    // }
    // }
  }

  function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
      let location = snake[i];
      boxes[location].classList.add('snake');
    }
  }

  function keyListener() {
    document.addEventListener('keydown', event => {
      let key = event.keyCode;
      if (key === 37) {
        dir = 'LEFT';
      }
      if (key === 38) dir = 'UP';
      if (key === 39) dir = 'RIGHT';
      if (key === 40) dir = 'DOWN';
    });
  }

  function move() {
    if (dir === 'LEFT') {
      boxes[ind].classList.remove('snake');
      ind--;
      getIndex(ind);
    }
    if (dir === 'RIGHT') {
      boxes[ind].classList.remove('snake');
      ind++;
      getIndex(ind);
    }
    if (dir === 'UP') {
      boxes[ind].classList.remove('snake');
      ind -= 20;
      getIndex(ind);
    }
    if (dir === 'DOWN') {
      boxes[ind].classList.remove('snake');
      ind += 20;
      getIndex(ind);
    }
  }
  setInterval(() => {
    move();
    keyListener();
    drawSnake();
    // drawSnake(ind);
    // console.log('Output for: snake', snake);
  }, 200);
  // console.log('Output for: drawSnake()', drawSnake());
});
