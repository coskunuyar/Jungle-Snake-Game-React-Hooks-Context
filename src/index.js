import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GameContextProvider} from './context/game/gameContext';
import {FoodContextProvider} from './context/food/foodContext';
import {SnakeContextProvider} from './context/snake/snakeContext';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';


ReactDOM.render(<GameContextProvider>
                    <SnakeContextProvider>
                        <FoodContextProvider>
                                    <App />
                            </FoodContextProvider>
                    </SnakeContextProvider>
                </GameContextProvider>, document.getElementById('root'));
serviceWorker.unregister();
