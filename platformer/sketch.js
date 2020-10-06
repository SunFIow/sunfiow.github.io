let size;
let player;
let gravity;
let walkForce;

let platforms = [];

let paused = false;

function setup() {
	size = createVector(1280, 720);
	createCanvas(size.x, size.y);
	gravity = createVector(0, 1);
	walkForce = createVector(0.75, 0);
	player = new Player(size.x/2, size.y/2, 25, 50);

	platforms.push(new Floor(width/2, height+200, width, 200));
	platforms.push(new Platform0(size.x + 100, size.y/3, 200, 20));
	platforms.push(new Platform1(size.x + 100, size.y*2/3, 200, 20));
}

function draw() {
		background(25);
		player.update();
		player.show();
		if(!paused){
			for (pf of platforms) {
				pf.update();
			}
		}

		for (pf of platforms) {
			pf.show();
		}
}

function intersects(obj1, obj2){
	if(	obj1.pos.x + obj1.size.w/2 >= obj2.pos.x - obj2.size.w/2 &&
			obj1.pos.x - obj1.size.w/2 <= obj2.pos.x + obj2.size.w/2 &&
			obj1.pos.y + 1 > obj2.pos.y - obj2.size.h &&
			obj1.pos.y - obj1.size.h < obj2.pos.y){
		return true;
	}
	return false;
}

function keyPressed() {
	if (keyCode === 80) {
    paused = !paused;
  }
  if (keyCode === 32) {
    player.jump();
  }
	if (keyCode === 79) {
    player.move(createVector(0, -300));
  }
	if (keyCode === 65) {
		player.walking(walkForce.copy().mult(-1));
  }
	if (keyCode === 68) {
		player.walking(walkForce.copy());
  }
	if (keyCode === 37) {
		player.applyForce(createVector(-0.5, 0));
  }
	if (keyCode === 39) {
		player.applyForce(createVector(0.5, 0));
  }
}

function keyReleased() {
	if (keyCode === 65) {
	player.walking(walkForce.copy());
  }
	if (keyCode === 68) {
	player.walking(walkForce.copy().mult(-1));
  }
}
