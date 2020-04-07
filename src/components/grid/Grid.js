import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

const Grid = ({ path }) => {

    const rows = path.length;
    const cols = path[0].length;

    let plot = [];
    for(let i = 0; i < rows * cols; i++) {

        let exits = path.flat()[i].split('').map(letter => {

            if(letter === 'T') return { dir: 'Top', id: i - cols + 1 };
            if(letter === 'R') return { dir: 'Right', id: i + 2 };
            if(letter === 'B') return { dir: 'Bottom', id: i + cols + 1 };
            if(letter === 'L') return { dir: 'Left', id: i };

            return [{}];

        });

        plot.push({
            id: i + 1,
            path: path[i] === 'X' ? false : true,
            exits: exits
        });
    }

    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: `${rows * 12}px`,
        width: `${cols * 12}px`,
        margin: 'auto'
    };

    const squares = plot.map(sq => {
        return <Square key={sq.id} plot={sq} />;
    });

    const gridRows = [];

    for(let t = 0; t < rows; t++) {

        let row = [];

        for(let i = 0; i < cols; i++) {
            row.push(squares[i + (cols * t)]);
        }

        gridRows.push(row);
    }

    const grid = gridRows.map((row, i) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', width: `${cols * 12}px`, height: '12px' }} key={i}>
                {row}
                <br />
            </div>
        );
    });

    return (
        <div style={gridStyle}>
            {grid}
        </div>
    );
};

Grid.propTypes = {
    path: PropTypes.array
};


export default Grid;
