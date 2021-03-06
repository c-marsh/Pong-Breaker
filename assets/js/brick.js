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
    this.flaggedToRemove = false;
  }

  draw(context) {
    //Brick styling
    context.fillStyle = "#AB3428";
    //Brick creation
    context.fillRect(
      this.position.xAxis,
      this.position.yAxis,
      this.width,
      this.height
    );
  }
  update(deltaTime) {
    //on inpact, change ball direction, play SFX, flag brick for deletion and play SFX
    if (impact(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.game.brickSFX.play();
      this.flaggedToRemove = true;
      this.game.score+=1;
    }
  }
}
