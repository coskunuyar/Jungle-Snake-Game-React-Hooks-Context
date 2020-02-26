
import React,{ useContext} from 'react';
import { SnakeContext } from '../../context/snake/snakeContext';
import './Progress.css';

function Progress(){
        const {snakeState} = useContext(SnakeContext);
        let level = Math.floor(snakeState.points / 40);
        let progressBar = (snakeState.points - level * 40)/10;

        return(
           <div className="star-result">
               <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated"  
                          role="progressbar" 
                          style={{width: (progressBar * 25) + "%"}} />
            </div>
           </div>
        )
}

export default Progress;
