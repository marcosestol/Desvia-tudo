let jogador;
let obstaculos = [];
let velocidadeObstaculo = 4;
let tamanhoJogador = 40;
let larguraObstaculo = 40;
let alturaObstaculo = 40;
let pontuacao = 0;

function setup() {
  createCanvas(600, 400);
  jogador = createVector(width / 2, height - 50);
  textSize(24);
}

function draw() {
  background(51);

  // Desenhar jogador
  fill(0, 255, 0);
  rect(jogador.x, jogador.y, tamanhoJogador, tamanhoJogador);

  // Criar obstáculos aleatórios
  if (frameCount % 60 === 0) {
    // a cada 60 frames
    let x = random(0, width - larguraObstaculo);
    obstaculos.push(createVector(x, -alturaObstaculo));
  }

  // Atualizar e desenhar obstáculos
  fill(255, 0, 0);
  for (let i = obstaculos.length - 1; i >= 0; i--) {
    obstaculos[i].y += velocidadeObstaculo;
    rect(obstaculos[i].x, obstaculos[i].y, larguraObstaculo, alturaObstaculo);

    // Checar colisão
    if (
      collideRectRect(
        jogador.x,
        jogador.y,
        tamanhoJogador,
        tamanhoJogador,
        obstaculos[i].x,
        obstaculos[i].y,
        larguraObstaculo,
        alturaObs
