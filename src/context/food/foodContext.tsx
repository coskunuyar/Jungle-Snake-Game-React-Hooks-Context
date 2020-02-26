import React , {createContext , useReducer} from 'react';
import foodReducer,{initialState} from './foodReducer';
import { getRandomCoordinates } from './actionCreators';

export interface IinitialContext {
    foodState: {
        foodCoordinates: number[]
    },
    dispatchFood?: any
}

let initialContext: IinitialContext = {foodState:{ foodCoordinates: getRandomCoordinates() }};
export const FoodContext = createContext(initialContext);

export const FoodContextProvider = (props: any) => {
    const [foodState , dispatchFood]  = useReducer(foodReducer,initialState);
    return(
        <FoodContext.Provider value={{foodState , dispatchFood }}>
            {props.children}
        </FoodContext.Provider>
    );
}