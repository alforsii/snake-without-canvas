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
  let randomBox;
  let randomIndex;
  let mySnake = document.getElementsByClassName('snake');
  let food = document.createElement('img');
  food.setAttribute('class', 'food');
  food.src = './img/kiwi.ico';

  let dir;
  let ind = 208; //this is our snakes starting index(div-box,which is located in 208);
  snake[0] = ind;

  let indRemove = 208;

  function getIndex(index) {
    if (randomIndex === snake[0]) {
      drawSnake();
      drawFood();
      // snake.pop();
    }
    snake.pop();
    snake.unshift(index);
  }

  // function addLength() {
  //   let i;
  //   let location;
  //   for (i = 0; i < boxes.length; i++) {
  //     location = snake[i];
  //     boxes[location].classList.add('snake');
  //   }
  //   snake.unshift(location);
  // }

  function drawSnake() {
    let i;
    for (i = 0; i < snake.length; i++) {
      let location = snake[i];
      boxes[location].classList.add('snake');
    }
  }

  function drawFood() {
    randomIndex = Math.floor(Math.random() * boxes.length);
    randomBox = boxes[randomIndex];
    randomBox.appendChild(food);
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
    //we get dir=direction from keyListener in order to know which way to increase/decrease the snakes index.
    if (dir === 'LEFT') {
      //remove class snake before creating another one.
      boxes[ind].classList.remove('snake');
      //we increase index and pass it to getIndex which will push the new increased or decreased index to snakes array for update
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
  }, 150);
  drawFood();
});
