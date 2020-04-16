var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var box = 32;
var cobrinha = [];
cobrinha[0] = {
  x: 8 * box,
  y: 8 * box,
};
var direcao = "right";
var comida = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
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

function desenharComida() {
  context.fillStyle = "red";
  context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direcao != "right") direcao = "left";
  if (event.keyCode == 38 && direcao != "down") direcao = "up";
  if (event.keyCode == 39 && direcao != "left") direcao = "right";
  if (event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo() {
  if (cobrinha[0].x > 15 * box && direcao == "right") cobrinha[0].x = 0;
  if (cobrinha[0].x < 0 && direcao == "left") cobrinha[0].x = 16 * box;
  if (cobrinha[0].y > 15 * box && direcao == "down") cobrinha[0].y = 0;
  if (cobrinha[0].y < 0 && direcao == "up") cobrinha[0].y = 16 * box;

  for (i = 1; i < cobrinha.length; i++) {
    if (cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y) {
      clearInterval(jogo);
      alert("Você perdeu :(");
      window.location.reload();
    }
  }

  criarBackground();
  criarCobrinha();
  desenharComida();

  let cobrinhaPosX = cobrinha[0].x;
  let cobrinhaPosY = cobrinha[0].y;

  if (direcao == "right") cobrinhaPosX += box;
  if (direcao == "left") cobrinhaPosX -= box;
  if (direcao == "up") cobrinhaPosY -= box;
  if (direcao == "down") cobrinhaPosY += box;

  if (cobrinhaPosX != comida.x || cobrinhaPosY != comida.y) cobrinha.pop();
  else {
    comida.x = Math.floor(Math.random() * 15 + 1) * box;
    comida.y = Math.floor(Math.random() * 15 + 1) * box;
  }
  let cabecaCobrinha = {
    x: cobrinhaPosX,
    y: cobrinhaPosY,
  };

  cobrinha.unshift(cabecaCobrinha);
}

var jogo = setInterval(iniciarJogo, 100);
