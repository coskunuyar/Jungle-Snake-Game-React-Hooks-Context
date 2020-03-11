import React,{useContext} from 'react';
import './Pause.css';
import { handlePauseToggle } from '../../context/game/actionCreators';
import { GameContext } from '../../context/game/gameContext';

function Pause(){
        const {gameState,dispatchGame} = useContext(GameContext);
        return(
            <button className={gameState.pause ? "pause-button btn btn-sm btn-success" : "pause-button btn btn-sm btn-danger"} onClick={() => dispatchGame(handlePauseToggle(gameState.pause))}>
                {gameState.pause ? <i className="fa fa-play" /> : <i className="fa fa-pause" />}
                <span className="pause-text">{gameState.pause ? "Resume" : "Pause"}</span>
            </button>
        )
}

export default React.memo(Pause);
