import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ plot }) => {

    const squareStyle = {
        height: '10px',
        width: '10px',
        borderCollapse: 'collapse',
        border: '1px solid black',
    };

    if(plot.exits.length) {
        plot.exits.forEach(exit => {
            squareStyle[`border${exit.dir}`] = '1px solid transparent';
        });
    }

    return (
        <div style={squareStyle} id={plot.id}>
        </div >
    );

};

Square.propTypes = {
    plot: PropTypes.shape({
        id: PropTypes.number,
        path: PropTypes.bool,
        exits: PropTypes.array
    })
};

export default Square;
