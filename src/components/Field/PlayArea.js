import React, { useState, useContext, useEffect } from 'react';
import Grid from './Grid';
import { store } from '../../store';
import grids from '../../gameData/grid';

const PlayArea = () => {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;

    //set grid
    const [useGrid, setGrid] = useState({ grid: [], rows: 0, cols: 0 });

    useEffect(() => {
        dispatch({
            type: 'LOAD_GRID',
            payload: grids[Math.floor(Math.random() * grids.length)]
        });
        dispatch({
            type: 'RENDER_GRID'
        });
    }, []);

    useEffect(() => {
        if(!globalState.state.gridRender) return;

        setGrid({
            grid: state.gridRender,
            rows: state.grid.length,
            cols: state.grid[0].length
        });
    }, [state.gridRender]);



    //render
    return (
        <>
            <Grid gridObj={useGrid} />
        </>
    );
};


export default PlayArea;
