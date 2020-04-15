var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var box = 32;

function criaBackground() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

criaBackground();
