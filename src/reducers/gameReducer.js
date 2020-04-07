import { RENDER_GRID, MOVE_ENEMY } from '../actions/gameActions';
import { grid, grid2 } from '../gameData/grid';

const initialState = {
    player: {
        hp: 100,
        live: true
    },
    grid: grid,
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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case RENDER_GRID: {
            const rows = state.grid.length;
            const cols = state.grid[0].length;

            let plot = [];
            for(let i = 0; i < rows * cols; i++) {

                let exits = state.grid.flat()[i].split('').map(letter => {

                    if(letter === 'T') return { dir: 'Top', id: i - cols + 1 };
                    if(letter === 'R') return { dir: 'Right', id: i + 2 };
                    if(letter === 'B') return { dir: 'Bottom', id: i + cols + 1 };
                    if(letter === 'L') return { dir: 'Left', id: i };

                    return [{}];

                });

                plot.push({
                    id: i + 1,
                    grid: state.grid[i] === 'X' ? false : true,
                    exits: exits,
                    enemies: []
                });
            }
            return { ...state, gridRender: plot };
        }
        case MOVE_ENEMY:
            return {
                ...state, enemies: state.enemies.map(e => {
                    if(e.id === action.payload.id) {
                        return { ...e, position: action.payload.newPos };
                    }
                    return e;
                })
            };

        default: return state;
    }
};

export default reducer;
