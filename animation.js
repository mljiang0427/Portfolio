"use strict";

var Scene = {
  canvas: undefined,
  ctx: undefined,
  sprite: undefined,
};

Scene.start = function () {
  // Get the canvas and it's context.
  Scene.canvas = document.getElementById("animationCanvas");
  Scene.ctx = Scene.canvas.getContext("2d");

  // Seup the bird to be displayed.
  Scene.sprite = bird;

  // Attach the image to be used for the sprite.
  Scene.sprite.img = new Image();
  Scene.sprite.img.src = Scene.sprite.src;

  // Wait till the bird image is loaded before starting the animation.
  Scene.sprite.img.onload = function () {
    Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
    Scene.mainLoop();
  };
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener("DOMContentLoaded", Scene.start);

Scene.clearCanvas = function () {
  Scene.ctx.fillStyle = "white";
  Scene.ctx.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function () {
  Scene.clearCanvas();
  Scene.update();
  Scene.draw();
  Scene.drawTextBubble(Scene.canvas.width - 245, 40, 200, 100, "Hello, World!");

  // Animate at 24 frames a second.
  window.setTimeout(Scene.mainLoop, 1000 / 24);
};

Scene.update = function () {
  // Set the canvas width to be that of the display Window. Which helps if you resize the window.
  Scene.canvas.width = window.innerWidth;

  // Set the location of the next frame.
  Scene.sprite.offset += 24;
  if (Scene.sprite.offset > Scene.canvas.width)
    Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function () {
  Scene.ctx.drawImage(
    Scene.sprite.img,
    Scene.sprite.frames[Scene.sprite.frame].frame.x,
    Scene.sprite.frames[Scene.sprite.frame].frame.y,
    Scene.sprite.frames[Scene.sprite.frame].frame.w,
    Scene.sprite.frames[Scene.sprite.frame].frame.h,
    Scene.sprite.offset,
    0,
    Scene.sprite.frames[Scene.sprite.frame].frame.w,
    Scene.sprite.frames[Scene.sprite.frame].frame.h
  );

  // Advance to the next frame.
  Scene.sprite.frame++;

  // At the end of the sprite sheet, start at the first frame.
  if (Scene.sprite.frame == Scene.sprite.frames.length) Scene.sprite.frame = 0;
};

Scene.drawTextBubble = function (x, y, width, height, text) {
  // Draw a rounded rectangle as the background for the text
  Scene.ctx.fillStyle = "white";
  Scene.ctx.strokeStyle = "black";
  Scene.ctx.lineWidth = 2;
  Scene.ctx.beginPath();
  Scene.ctx.moveTo(x + 10, y);
  Scene.ctx.arcTo(x + width, y, x + width, y + 10, 10);
  Scene.ctx.arcTo(x + width, y + height, x + width - 10, y + height, 10);
  Scene.ctx.arcTo(x, y + height, x, y + height - 10, 10);
  Scene.ctx.arcTo(x, y, x + 10, y, 10);
  Scene.ctx.closePath();
  Scene.ctx.fill();
  Scene.ctx.stroke();

  // Text
  Scene.ctx.fillStyle = "black";
  Scene.ctx.font = "30px Arial";
  Scene.ctx.fillText(text, x + 10, y + 45);
};
