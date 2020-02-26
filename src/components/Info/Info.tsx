import React , {useContext} from 'react';
import {SnakeContext} from '../../context/snake/snakeContext';
import './Info.css';

function Info(){
    const {snakeState} = useContext(SnakeContext);
    let resultArr = [];
    let stars = Math.floor(snakeState.points / 40);
    for(let i=0; i<stars; i++){
        resultArr.push(<i className="fa fa-star star-yellow"></i>)
    }
    return(
            <div>
                <h3>Jungle Snake Game</h3> 
                <p>Developed By <a href="https://github.com/coskunuyar" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i> Coskun Uyar</a></p>
                <p>{Math.floor(snakeState.points/40)} lvl.  {resultArr}/  {snakeState.points} pts.</p>
            </div>
    );
}

export default Info;
