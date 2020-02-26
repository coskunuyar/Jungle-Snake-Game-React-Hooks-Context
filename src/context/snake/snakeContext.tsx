import React,{createContext, useReducer} from 'react';
import snakeReducer,{initialState} from './snakeReducer';

interface IinitialContext {
    snakeState?: any,
    dispatchSnake?: any
}

let initialContext: IinitialContext = {};
export const SnakeContext = createContext(initialContext);

export const SnakeContextProvider = (props: any) => {
    const [snakeState,dispatchSnake] = useReducer(snakeReducer,initialState);
    return (
        <SnakeContext.Provider value={{snakeState,dispatchSnake}}>
            {props.children}
        </SnakeContext.Provider>
    );
}
