export function impact(ball, features) {
  //ball measured from centre of ball
  let ballT = ball.position.y - ball.sizeR;
  let ballB = ball.position.y + ball.sizeR;
  let ballL = ball.position.x - ball.sizeR;
  let ballR = ball.position.x + ball.sizeR;

  //rectangles measured from top left
  let featureT = features.position.yAxis;
  let featureB = features.position.yAxis + features.height;
  let featureL = features.position.xAxis;
  let featureR = features.position.xAxis + features.width;

//   let topPaddleT = topPaddle.position.yAxisTop;
//   let topPaddleB = topPaddle.position.yAxisTop + topPaddle.height;
//   let topPaddleL = topPaddle.position.xAxisTop;
//   let topPaddleR = topPaddle.position.xAxisTop + topPaddle.width;

  //bricks - currently only referencing 4th brick in array
//ball.game.features.bricks.forEach(object => {
    

//   let brickB =
//     ball.game.features[10].position.yAxisBrick + ball.game.features[10].height;
//   let brickT = ball.game.features[10].position.yAxisBrick;
//   let brickL = ball.game.features[10].position.xAxisBrick;
//   let brickR =
//     ball.game.features[10].position.xAxisBrick + ball.game.features[10].width;
//});
  //returns true if ball has come into contact with a brick/paddle surface
  if (
    ballB >= featureT &&
    ballR >= featureL &&
    ballL <= featureR &&
    ballT <= featureB
  )
    return true;
//   else if (
//     ballB >= topPaddleT &&
//     ballR >= topPaddleL &&
//     ballL <= topPaddleR &&
//     ballT <= topPaddleB
//   )
//     return true;
//   else if (
//     ballB >= brickT &&
//     ballR >= brickL &&
//     ballL <= brickR &&
//     ballT <= brickB
//   )
//     return true;
  else return false;
}

// if (
//       ballBottom >= bottomPaddleTop &&
//       this.position.x >= leftSideOfPaddle &&
//       this.position.x <= rightSideOfPaddle
//     )
