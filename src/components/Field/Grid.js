import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const Grid = ({ gridObj }) => {

    const { grid, rows, cols } = gridObj;

    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: `${rows * 12}px`,
        width: `${cols * 12}px`,
        margin: 'auto'
    };

    const makeGrid = () => {

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

        return gridRows.map((row, i) => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', width: `${cols * 12}px`, height: '12px' }} key={i}>
                    {row}
                    <br />
                </div>
            );
        });
    };

    return (
        <div style={gridStyle}>
            {gridObj && makeGrid()}
        </div>
    );
};

Grid.propTypes = {
    gridObj: PropTypes.object
};

export default Grid;
