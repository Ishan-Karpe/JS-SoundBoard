let width = window.innerWidth;
let height = window.innerHeight;

//sounds
let arcade;
let cinematic;
let epic;
let fast;
let retroe;
let retro;
let techy;
let trumpet;
let tt;

let buttons_top = [];
let buttons_mid = [];
let buttons_bot = [];

function preload() {
  arcade = loadSound('arcade-retro.wav');
  cinematic = loadSound('cinematic-woosh.wav');
  epic = loadSound('epic-orch.wav');
  fast = loadSound('fast-rocket.wav');
  retroe = loadSound('retro-emergency.wav');
  retro = loadSound('retro-game.wav');
  techy = loadSound('techy-future.wav');
  trumpet = loadSound('trumpet-fanfare.wav');
  tt = loadSound('tt-clock.wav');
}

function setup() {
  let canvas = createCanvas(width, height); // Create a canvas that fills the window

  let b1 = new Button(width/3, height/3, 200, 80, color(226, 132, 19), color(244, 190, 124), arcade);
  let b2 = new Button(width/2, height/3, 200, 80, color(0, 159, 183), color(153, 241, 255), cinematic);
  let b3 = new Button(2*width/3, height/3, 200, 80, color(145, 145, 233), color(204, 204, 245), epic);

  let b4 = new Button(width/3, height/2, 200, 80, color(205, 92, 92), color(240, 128, 128), fast);
  let b5 = new Button(width/2, height/2, 200, 80, color(72, 209, 204), color(175, 238,238), retroe);
  let b6 = new Button(2*width/3, height/2, 200, 80, color(255, 215, 0), color(255, 255, 0), retro);

  let b7 = new Button(width/3, 2*height/3, 200, 80, color(255, 163, 175), color(255, 214, 220), techy);
  let b8 = new Button(width/2, 2*height/3, 200, 80, color(143, 45, 86), color(216, 131, 166), trumpet);
  let b9 = new Button(2*width/3, 2*height/3, 200, 80, color(236, 78, 32), color(234, 162, 133), tt);
  
  buttons_top.push(b1); // Add buttons to the top row
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_mid.push(b4); // Add buttons to the middle row
  buttons_mid.push(b5);
  buttons_mid.push(b6);

  buttons_bot.push(b7); // Add buttons to the bottom row
  buttons_bot.push(b8);
  buttons_bot.push(b9);

}


function draw() {
  background(247, 178, 183);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show(); // Display each button in the top row
    buttons_mid[i].show(); // Display each button in the middle row
    buttons_bot[i].show(); // Display each button in the bottom row
  }
}

class Button {
  constructor(x, y, w, h, color, accent, sound) {
    this.x = x; // x position of the button
    this.y = y; // y position of the button
    this.w = w; // width of the button
    this.h = h; // height of the button
    this.color = color; // main color of the button
    this.accent = accent; // accent color for the button
    this.sound = sound; // sound associated with the button
  }

  show() {
    noStroke(); // Disable the outline for the button shapes

    fill(this.color);
    rect((this.x-100), this.y, this.w, 50);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, (this.y+50), this.w, this.h, TWO_PI, PI);
  }
}


// each button is composed of 3 distinct shapes, reactangle, oval, and bottom arc
//3x3 grid for soundboard