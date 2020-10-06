function Platform1(x, y, w, h){
  this.pos = createVector(x, y);
  this.size = {w: w, h: h};
  this.vel = createVector(-6, 0);
}

Platform1.prototype.update = function () {
  this.pos.add(this.vel);
};

Platform1.prototype.show = function () {
  noStroke();
  fill(200, 0, 100);
  rect(this.pos.x - this.size.w/2, this.pos.y - this.size.h, this.size.w, this.size.h);
};
