import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ plot }) => {

    const squareStyle = {
        height: '10px',
        width: '10px',
        border: '1px solid black'
    };

    if(plot.exits.length) {
        plot.exits.forEach(exit => {
            squareStyle[`border-${exit.dir}`] = 'none';
        });
    }

    return (
        <div style={squareStyle} id={plot.id}>
        </div >
    );

};

Square.propTypes = {
    plot: PropTypes.shape({
        id: PropTypes.string,
        path: PropTypes.bool,
        exits: PropTypes.arrayOf(
            PropTypes.shape({
                dir: PropTypes.string,
                id: PropTypes.string
            })
        )
    })
};

export default Square;
