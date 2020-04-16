var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var box = 32;
var cobrinha = [];
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box,
};
var direcao = "right";

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

function iniciarJogo() {
  criarBackground();
  criarCobrinha();

  let cobrinhaPosX = cobrinha[0].x;
  let cobrinhaPosY = cobrinha[0].y;
  let cabecaCobrinha = {
    x: cobrinhaPosX,
    y: cobrinhaPosY,
  };

  if (direcao == "right") cobrinhaPosX += box;
  if (direcao == "left") cobrinhaPosY -= box;
  if (direcao == "up") cobrinhaPosY -= box;
  if (direcao == "down") cobrinhaPosY += box;

  cobrinha.pop();
  snake.unshift(cabecaCobrinha);
}

var jogo = setInterval(iniciarJogo, 100);
