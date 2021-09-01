"use strict";

const array = ["0"];
const newArr = array + 1;
let i;
let result;

initLoop();

function initLoop() {
  i = 0;
  loop();
}

function loop() {
  console.log("loop", array[i]);
  result = array.unshift(newArr);
  console.log(array);
  i++;

  //   setTimeout(loop, 1000);
  //   if (i === 9) {
  //     array = array.slice(0, 9);
  //     console.log(array);
  //     //     // setTimeout(loop, 400);
  //   }
}
