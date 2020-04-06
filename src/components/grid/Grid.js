import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Grid = ({ plot }) => {

    const gridStyle = {
        display: 'flex',
    };

    const squares = plot.map(sq => {
        return <Square key={sq.id} plot={sq} />;
    });

    return (
        <div style={gridStyle}>
            {squares}
        </div>
    );
};

Grid.propTypes = {
    plot: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            path: PropTypes.bool,
            exits: PropTypes.arrayOf(
                PropTypes.shape({
                    dir: PropTypes.string,
                    id: PropTypes.string
                })
            )
        })
    )
};

export default Grid;
