import React,{useContext} from 'react';
import {FoodContext} from '../../context/food/foodContext';
import {IinitialContext} from '../../context/food/foodContext';
import './Food.css';

function Food(){
        const {foodState} = useContext<IinitialContext>(FoodContext);
        return(
            <div className="snake-food" style={{ left: `${foodState.foodCoordinates[0]}%`, top: `${foodState.foodCoordinates[1]}%`}} />
        );
}

export default React.memo(Food);
