import { impact } from "./impact.js";
export default class Brick {
  constructor(game, position) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    //Brick dimensions, relative to canvas size
    this.width = this.gameWidth / 10;
    this.height = this.gameHeight / 50;
    //Position
    this.position = position;

  }  

  

  draw(context) {
    //Brick styling
    context.fillStyle = "blue";
    //Brick creation
    context.fillRect(
      this.position.xAxis,
      this.position.yAxis,
      this.width,
      this.height
    );
  }
  update(deltaTime) {
        if (impact(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
      }
  }
}
