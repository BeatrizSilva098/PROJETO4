let palavra;

function setup() {
  createCanvas(1000, 800);
  
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
    let palavras = ["to my STAY", "Bad Romance", "Blue", "crwoley", "Pudim"];
  return random(palavras);
}
 
function inicializaCores() {
background("black");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}
  
function draw() {
  inicializaCores();
  
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial,500, 400);
}
function modoNoturno(horario){
  if (horario > 18) {
    console.log("Você precisa ligar o modo noturno!");
  } else {
    console.log("modo noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20)