"use strict";

let gradient;

var Game = {
  canvas: undefined,
  ctx: undefined,
  sprite: undefined,
};

Game.start = function () {
  Game.canvas = document.getElementById("myCanvas");
  Game.ctx = Game.canvas.getContext("2d");
  Game.canvas.width = window.innerWidth;
  Game.canvas.height = window.innerHeight;
  Game.mainLoop();
};

document.addEventListener("DOMContentLoaded", Game.start);

Game.update = function () {};

Game.draw = function () {
  // Create linear gradient (text)
  gradient = Game.ctx.createLinearGradient(0, 0, 300, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");
  // Write text
  Game.ctx.font = "20px Georgia";
  Game.ctx.fillStyle = gradient;
  Game.ctx.fillText("Welcome to My Garden!", 10, 50);

  // Create circular gradient (sun)
  gradient = Game.ctx.createRadialGradient(
    this.canvas.width - 323,
    this.canvas.height - 484,
    5,
    this.canvas.width - 323,
    this.canvas.height - 484,
    100
  );
  gradient.addColorStop(0, "orange");
  gradient.addColorStop(0.9, "white");
  // draw sun
  Game.ctx.beginPath();
  Game.ctx.arc(
    this.canvas.width - 323,
    this.canvas.height - 484,
    60,
    0,
    2 * Math.PI
  );
  Game.ctx.fillStyle = gradient;
  Game.ctx.fill();

  // Create linear gradient (ground)
  gradient = Game.ctx.createLinearGradient(
    0,
    this.canvas.height - 200,
    0,
    this.canvas.height
  );
  gradient.addColorStop("0", "#e3e8e4");
  gradient.addColorStop("0.5", "#6ec47f");
  // draw ground
  Game.ctx.beginPath();
  Game.ctx.fillStyle = gradient;
  Game.ctx.fillRect(
    0,
    this.canvas.height - 200,
    this.canvas.width,
    this.canvas.height - 200
  );

  // draw mountains
  Game.ctx.beginPath();
  Game.ctx.moveTo(this.canvas.width - 400, this.canvas.height - 200);
  Game.ctx.bezierCurveTo(
    this.canvas.width - 350,
    this.canvas.height - 490,
    this.canvas.width - 270,
    this.canvas.height - 200,
    this.canvas.width - 240,
    this.canvas.height - 200
  );
  Game.ctx.lineWidth = 2;
  Game.ctx.strokeStyle = "grey";
  Game.ctx.stroke();

  Game.ctx.beginPath();
  Game.ctx.moveTo(this.canvas.width - 280, this.canvas.height - 260);
  Game.ctx.bezierCurveTo(
    this.canvas.width - 230,
    this.canvas.height - 550,
    this.canvas.width - 200,
    this.canvas.height - 350,
    this.canvas.width - 160,
    this.canvas.height - 260
  );
  Game.ctx.stroke();

  Game.ctx.beginPath();
  Game.ctx.moveTo(this.canvas.width - 130, this.canvas.height - 200);
  Game.ctx.bezierCurveTo(
    this.canvas.width - 70,
    this.canvas.height - 450,
    this.canvas.width - 40,
    this.canvas.height - 350,
    this.canvas.width - 20,
    this.canvas.height - 200
  );
  Game.ctx.stroke();
};

// draw rocks
Game.drawRock = function (color) {
  Game.ctx.beginPath();
  let x = Math.random() * this.canvas.width;
  let y =
    Math.random() * (this.canvas.height - 399) + (this.canvas.height - 200);

  let size = Math.random() * 10 + 0.3;
  Game.ctx.fillStyle = color;
  Game.ctx.arc(x, y, size, 0, 2 * Math.PI);
  Game.ctx.fill();
};
Game.drawRocks = function () {
  for (let i = 0; i < 20; i++) {
    const grayscale = Math.floor(Math.random() * 100);
    const color = `rgb(${grayscale}, ${grayscale}, ${grayscale})`;
    Game.drawRock(color);
  }
};

// draw  grass
Game.drawGrass = function (x, y, height) {
  Game.ctx.beginPath();
  Game.ctx.moveTo(x, y);
  Game.ctx.lineTo(x, y - height);
  Game.ctx.strokeStyle = "#026927";
  Game.ctx.lineWidth = 2.5;
  Game.ctx.lineCap = "round";
  Game.ctx.stroke();
};
Game.drawGrasses = function () {
  for (let x = 0; x < this.canvas.width; x += 5) {
    const randomHeight = Math.random() * 40 + 10;
    Game.drawGrass(x, this.canvas.height, randomHeight);
  }
};

// draw clouds
Game.drawCloud = function (x, y, size) {
  Game.ctx.beginPath();
  Game.ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
  Game.ctx.arc(x + size * 0.4, y - size * 0.3, size * 0.4, 0, Math.PI * 2);
  Game.ctx.arc(x + size * 0.7, y, size * 0.6, 0, Math.PI * 2);
  Game.ctx.arc(x + size * 1.1, y - size * 0.05, size * 0.4, 0, Math.PI * 2);
  Game.ctx.fillStyle = "white";
  Game.ctx.fill();
};
Game.drawClouds = function () {
  for (let i = 0; i < 7; i++) {
    const x = Math.random() * this.canvas.width + 350;
    const y = Math.random() * this.canvas.height * 0.2;
    const size = Math.random() * 50 + 15;
    Game.drawCloud(x, y, size);
  }
};

// draw a house
Game.drawHouse = function () {
  // Set line styles
  Game.ctx.strokeStyle = "black";
  Game.ctx.lineWidth = 2;

  // Draw the house outline
  Game.ctx.beginPath();
  Game.ctx.moveTo(50, 300);
  Game.ctx.lineTo(200, 100);
  Game.ctx.lineTo(350, 300);
  Game.ctx.closePath();
  Game.ctx.stroke();
  Game.ctx.rect(80, 300, 240, 100);
  Game.ctx.stroke();

  // Draw the windows
  Game.ctx.fillStyle = "#ab6e55";
  Game.ctx.fillRect(95, 310, 30, 30);
  Game.ctx.fillRect(275, 310, 30, 30);

  // Draw the door
  Game.ctx.fillStyle = "#ab6e55";
  Game.ctx.fillRect(190, 350, 35, 50);
  Game.ctx.beginPath();
  Game.ctx.arc(220, 375, 1.75, 0, Math.PI * 2);
  Game.ctx.fillStyle = "black";
  Game.ctx.fill();
};

Game.mainLoop = function () {
  Game.update();
  Game.draw();
  Game.drawGrasses();
  Game.drawRocks();
  Game.drawClouds();
  Game.drawHouse();
};
