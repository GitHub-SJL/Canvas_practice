import { randomNumberBetween } from "./utils.js";

export default class Particle {
  constructor() {
    this.rAlpha = randomNumberBetween(0,5);
    this.r = innerHeight / 4;

    this.angleAlpha = randomNumberBetween(1,2);
    this.angle = randomNumberBetween(0, 360);
  }
  update() {
    this.r += this.rAlpha; 
    this.angle += this.angleAlpha;
    this.x = innerWidth / 2 + this.r * Math.cos((Math.PI / 180) * this.angle);
    this.y = innerHeight / 2 + this.r * Math.sin((Math.PI / 180) * this.angle);
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }
}
