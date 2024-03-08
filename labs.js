"use strict";

var fruit = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 15, color: "yellow" },
  { name: "Kiwi", quantity: 5, color: "green" },
  { name: "Blueberry", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 10, color: "purple" },
];

var Game = {
  canvas: undefined,
  ctx: undefined,
};

Game.start = function () {
  Game.canvas = document.getElementById("myCanvas");
  Game.ctx = Game.canvas.getContext("2d");
  Game.mainLoop();
};

document.addEventListener("DOMContentLoaded", Game.start);
Game.update = function () {};

Game.draw = function () {
  let x = 10;
  let y = 10;
  const maxQuantity = Math.max(...fruit.map((item) => item.quantity)); // 20 is maximum quantity

  fruit.forEach((item) => {
    let barWidth = (item.quantity / maxQuantity) * (Game.canvas.width - 50);
    let barHeight = 45;

    // draw each bar and fill different color
    Game.ctx.fillStyle = item.color;
    Game.ctx.fillRect(x, y, barWidth, barHeight);

    // write each quantity and name
    Game.ctx.fillStyle = "black";
    Game.ctx.font = "14px Georgia";
    Game.ctx.fillText(item.quantity, x + 10, y + 18);
    Game.ctx.fillText(item.name, x + 10, y + 35);

    // update y position
    y = y + barHeight + 10;
  });
};

Game.mainLoop = function () {
  Game.update();
  Game.draw();
};
