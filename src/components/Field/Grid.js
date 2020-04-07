import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const Grid = ({ grid, rows, cols, enemies }) => {


    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: `${rows * 12}px`,
        width: `${cols * 12}px`,
        margin: 'auto'
    };

    //DO THE FOLLOWING IN THE REDUCER
  
    // enemies.forEach(e => {
    //     if(e.live) {
    //         grid.find(sq => sq.id === e.position).enemies.push(e.id);
    //     }
    // });


    const squares = grid.map(sq => {
        return <Square key={sq.id} plot={sq} enemies={sq.enemies} />;
    });


    const gridRows = [];

    for(let t = 0; t < rows; t++) {

        let row = [];

        for(let i = 0; i < cols; i++) {
            row.push(squares[i + (cols * t)]);
        }

        gridRows.push(row);
    }

    const gridRender = gridRows.map((row, i) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', width: `${cols * 12}px`, height: '12px' }} key={i}>
                {row}
                <br />
            </div>
        );
    });

    return (
        <div style={gridStyle}>
            {gridRender}
        </div>
    );
};


Grid.propTypes = {
    grid: PropTypes.array,
    enemies: PropTypes.array,
    rows: PropTypes.number,
    cols: PropTypes.number
};


export default Grid;
