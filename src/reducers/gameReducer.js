import { RENDER_GRID } from '../actions/gameActions';
import { grid, grid2 } from '../gameData/grid';
import React from 'react';
import Square from './Square';

const initialState = {
    player: {
        hp: 100,
        live: true
    },
    grid: grid,
    rows: grid.length,
    cols: grid[0].length,
    gridRender: [],
    enemies: [
        {
            id: 1,
            position: 0,
            hp: 10,
            live: true,
            speed: 500
        }
    ],

};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case RENDER_GRID: {

            let plot = [];
            for(let i = 0; i < state.rows * state.cols; i++) {

                let exits = state.grid.flat()[i].split('').map(letter => {

                    if(letter === 'T') return { dir: 'Top', id: i - state.cols + 1 };
                    if(letter === 'R') return { dir: 'Right', id: i + 2 };
                    if(letter === 'B') return { dir: 'Bottom', id: i + state.cols + 1 };
                    if(letter === 'L') return { dir: 'Left', id: i };

                    return [{}];

                });

                plot.push({
                    id: i + 1,
                    grid: state.grid[i] === 'X' ? false : true,
                    exits: exits
                });
            }

            const squares = plot.map(sq => {
                return <Square key={sq.id} plot={sq} />;
            });

            const gridRows = [];

            for(let t = 0; t < state.rows; t++) {

                let row = [];

                for(let i = 0; i < state.cols; i++) {
                    row.push(squares[i + (state.cols * t)]);
                }

                gridRows.push(row);
            }

            const grid = gridRows.map((row, i) => {
                return (
                    <div style={{ display: 'flex', flexDirection: 'row', width: `${state.cols * 12}px`, height: '12px' }} key={i}>
                        {row}
                        <br />
                    </div>
                );
            });

            return { ...state, gridRender: grid };
        }




        default: return state;
    }
};

export default reducer;
