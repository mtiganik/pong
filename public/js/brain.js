export class Paddle{
  width = 50;
  height = 200;
  left = 0
  top = 0 
  color = 'blue'

  constructor(left,top, color){
    this.left = left;
    this.top = top;
    this.color = color
  }
}

export class Ball {

}

export default class Brain {
  width = 1000;
  height = 1000;
  borderthickness = 30

  leftPaddle = new Paddle(50,200, 'green')
  rightPaddle = new Paddle(900, 200, 'blue')

  constructor(){
    console.log("Brain constructor")
  }

  movePaddle(paddle,step){
    paddle.top += step * 50
  }
}