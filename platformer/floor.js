function Floor(x, y, w, h){
  this.pos = createVector(x, y);
  this.size = {w: w, h: h};
}

Floor.prototype.update = function () {};

Floor.prototype.show = function () {
  noStroke();
  fill(255, 0, 0);
  line(this.pos.x - this.size.w/2, this.pos.y, this.pos.x + this.size.w/2, this.pos.y);
};
