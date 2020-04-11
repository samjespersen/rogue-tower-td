import React, { createContext, useReducer } from 'react';
import gameReducer from './reducers/gameReducer';

const initialState = {
    player: {
        hp: 100,
        live: true
    },
    grid: null,
    gridRender: null,
    enemies: [
        {
            id: 1,
            position: 5,
            hp: 10,
            live: true,
            speed: 500
        }
    ],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
