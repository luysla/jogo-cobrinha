var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var box = 32;
var cobrinha = [];
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box,
};

function criarBackground() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (i = 0; i < cobrinha.length; i++) {
    context.fillStyle = "green";
    context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
  }
}

criarBackground();
criarCobrinha();
