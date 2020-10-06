function Player(x, y, w, h){
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.maxSpeed = createVector(10, 30);
    this.acc = createVector();
    this.size = {w: w, h: h};

    this.walk = createVector();

    this.jumped = false;
    this.doublejumped = false;
    this.flying = false;
}

Player.prototype.update = function () {
  this.applyForce(this.walk);

  this.limit();
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
  this.vel.mult(0.95);

  let objectHit = this.inAir();
  if(objectHit === null){
    this.applyForce(gravity);
    this.flying = true;
  }else if(this.flying){
    this.pos.y = (objectHit.pos.y - objectHit.size.h);
    this.vel.y *= 0;
    this.flying = false;
    this.jumped = false;
    this.doublejumped = false;
  }
};

Player.prototype.inAir = function () {
  for (pf of platforms) {
    if(intersects(this, pf)){

      return pf;
    }
  }
  return null;
};


Player.prototype.limit = function () {
  if(Math.abs(this.vel.x) > Math.abs(this.maxSpeed.x)){
    this.vel.x /= Math.abs(this.vel.x);
    this.vel.x *= this.maxSpeed.x;
  }
  if(Math.abs(this.vel.y) > Math.abs(this.maxSpeed.y)){
    this.vel.y /= Math.abs(this.vel.y);
    this.vel.y *= this.maxSpeed.y;
  }
};

Player.prototype.show = function () {
  noStroke();
  fill(255);
  ellipse(this.pos.x, this.pos.y - this.size.h/2, this.size.w, this.size.h);

  strokeWeight(10);
  stroke(255, 0, 0);
  point(this.pos.x, this.pos.y);

  line(0, height, width, height);
};

Player.prototype.applyForce = function (f) {
  this.acc.add(f);
};

Player.prototype.move = function (move) {
  this.pos.add(move);
};

Player.prototype.teleport = function (teleportTO) {
  this.pos = teleportTO;
};

Player.prototype.walking = function (dir) {
  this.walk.add(dir);
};

Player.prototype.jump = function () {
  if(!this.jumped && !this.flying){
    this.jumped = true;
    this.doublejumped = false;
    this.applyForce(createVector(0, -30));
  }else if(this.jumped && !this.doublejumped){
    this.jumped = false;
    this.doublejumped = true;
    this.applyForce(createVector(0, -30));
  }
};
