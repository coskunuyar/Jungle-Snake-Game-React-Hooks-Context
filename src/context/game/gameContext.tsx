import React,{createContext, useReducer} from 'react';
import gameReducer,{initialState} from './gameReducer';

interface IinitialContext {
    gameState: {
        animation: boolean,
        pause: boolean
    },
    dispatchGame?: any
}

let initialContext: IinitialContext = { gameState: { animation: false , pause: false}};
export const GameContext = createContext(initialContext);

export const GameContextProvider = (props: any) => {
    const [gameState , dispatchGame] = useReducer(gameReducer,initialState);
    return (
        <GameContext.Provider value={{gameState,dispatchGame}}>
            {props.children}
        </GameContext.Provider>
    )
}