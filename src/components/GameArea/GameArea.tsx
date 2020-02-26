import React , {useContext} from 'react';
import Snake from '../Snake/Snake';
import Food from '../Food/Food';
import { SnakeContext } from '../../context/snake/snakeContext';
import { GameContext } from '../../context/game/gameContext';
import './GameArea.css';


function GameArea(){
        const {snakeState} = useContext(SnakeContext);
        const {gameState} = useContext(GameContext);
        return(
            <div className={"game-area game-border-"+ (gameState.animation ? 4 : (snakeState.points%40)/10 )}>
            <Snake />
            <Food />
          </div>
        );
}

export default GameArea;