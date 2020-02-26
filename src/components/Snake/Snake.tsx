import React, { useContext } from 'react';
import { SnakeContext } from '../../context/snake/snakeContext';
import './Snake.css';

function Snake(){
        const {snakeState} = useContext(SnakeContext);
        return(
            <div>
                {snakeState.dots.map((dot: Array<number>, i: number) => {
                    const style = {
                        left: `${dot[0]}%`,
                        top: `${dot[1]}%`
                    }
                    return (
                        <div className="snake-dot" key={i} style={style}></div>
                    )
                })}
            </div>
        );
}

export default Snake;
