import React,{useEffect, useState, useContext } from 'react';
import Progress from '../Progress/Progress';
import Pause from '../Pause/Pause';
import Info from '../Info/Info';
import GameArea from '../GameArea/GameArea';
import { toast } from 'react-toastify';
import { setFoodCordinates}  from '../../context/food/actionCreators';
import { updatePoints} from '../../context/snake/actionCreators';
import { updateSnake } from '../../context/snake/actionCreators';
import { updateAnimation } from '../../context/game/actionCreators';
import { GameContext } from '../../context/game/gameContext';
import { SnakeContext } from '../../context/snake/snakeContext';
import { FoodContext } from '../../context/food/foodContext';

function Game(){
  const [speed,setSpeed] = useState(65);
  const [direction,setDirection] = useState<"RIGHT" | "LEFT" | "UP" | "DOWN">("RIGHT");
  const [time,setTime] = useState<number>(0);

  const {gameState,dispatchGame} = useContext(GameContext);
  const {snakeState,dispatchSnake} = useContext(SnakeContext);
  const {foodState,dispatchFood} = useContext(FoodContext);

  useEffect(() => {
    toast.success("⚔️ Welcome !!");
  },[]);

  useEffect(() => {
    let moveInterValId = setInterval(() => { setTime(previousState => previousState + 1); },speed);
    return () => clearInterval(moveInterValId);
  },[speed]);

  useEffect(() => {
    moveSnake();
  },[time])

  useEffect(() => {
    document.onkeydown = onKeyDown;
  },[direction])

  useEffect(() => {
    controlSnakeBorders();
    controlSnakeCollapsed();
    controlEat();
  });

  const onKeyDown = (e: KeyboardEvent) => {
    if(e.keyCode === 38 && direction !== 'DOWN'){
      setDirection(previousState => 'UP');
    }else if(e.keyCode === 40 && direction !== 'UP'  ){
      setDirection(previousState => 'DOWN');
    }else if(e.keyCode === 37 && direction !== 'RIGHT' ){
      setDirection(previousState => 'LEFT');
    }else if(e.keyCode === 39 && direction !== 'LEFT'){
      setDirection(previousState => 'RIGHT');
    }
  }

  const moveSnake = () => {
    if(gameState.pause) return
    let dots = [...snakeState.dots];
    let head = dots[dots.length - 1];

    if(direction === 'RIGHT'){
      head = [head[0] + 2, head[1]];
    }else if(direction === 'LEFT'){
      head = [head[0] - 2, head[1]];
    }else if(direction === 'DOWN'){
      head = [head[0], head[1] + 2];
    }else if(direction === 'UP'){
      head = [head[0], head[1] - 2];
    }
  
    dots.push(head);
    dots.shift();
    dispatchSnake(updateSnake(dots));
  }

  const controlSnakeBorders = () => {
    let head = snakeState.dots[snakeState.dots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  }

  const controlSnakeCollapsed = () => {
    let snake = [...snakeState.dots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver();
      }
    })
  }

  const checkLevelUpAnimation = (points: number) => {
    if(points > 0 && (points % 40 === 0) ){
      dispatchGame(updateAnimation(true));
      setTimeout(() => { dispatchGame(updateAnimation(false));},1000);
    }else{
      dispatchGame(updateAnimation(false));
    }
  }

  const controlEat = () => {
    let head = snakeState.dots[snakeState.dots.length - 1];
    let food = foodState.foodCoordinates;
    let points = snakeState.points + 10;

    if (head[0] === food[0] && head[1] === food[1]) {
      Math.floor(points / 40) > Math.floor(snakeState.points / 40) && toast.warn("🧡🧡 Level Up !");
      dispatchFood(setFoodCordinates());
      dispatchSnake(updatePoints( points ));
      enlargeSnake();
      setSpeed(previousSpeed => previousSpeed - 5);
      checkLevelUpAnimation(points);
    }
  }

  const enlargeSnake = () => {
    let newSnake = [...snakeState.dots];
    newSnake.unshift([]);
    dispatchSnake(updateSnake(newSnake));
  }

  const onGameOver = () => {
    toast.error("😭 Game Over");
    dispatchFood(setFoodCordinates());
    dispatchSnake(updatePoints(0));
    dispatchSnake(updateSnake( [[0,0],[2,0],[4,0]]));
    dispatchGame(updateAnimation(false));
    setDirection("RIGHT");
    setSpeed(70);
  }

    return (
        <div style={{textAlign:"center"}}>
          <div className="info-tab">
            <Info/>
            <Progress />
            <Pause/>
          </div>
          <GameArea />
        </div>
    );
}

export default Game;