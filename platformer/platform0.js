function Platform0(x, y, w, h){
  this.pos = createVector(x, y);
  this.size = {w: w, h: h};
  this.vel = createVector(-3, 0);
}

Platform0.prototype.update = function () {
  this.pos.add(this.vel);
};

Platform0.prototype.show = function () {
  noStroke();
  fill(0, 255, 100);
  rect(this.pos.x - this.size.w/2, this.pos.y - this.size.h, this.size.w, this.size.h);
};
