let a;
let b;
let o;
let ob;

function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("sketch");
  noStroke();
  a = height;
  o = 1;
  b = height / height;
  ob = 1;
}

function draw() {
  fill(300, 30);
  rect(0, 0, width, height);
  fill("black");
  rect(0, a, width, 3);
  rect(0, b, width, 3);
  fill("white");
  a = a - o;
  if (a == 0) {
    a = height / height;
    o = o * -1;
  } else if (a == height) {
    a = height;
    o = o * -1;
  }
  b = b - ob;
  if (b == 0) {
    b = height / height;
    ob = ob * -1;
  } else if (b == height) {
    b = height;
    ob = ob * -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
