import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ id, exits }) => {

    const squareStyle = {
        height: '10px',
        width: '10px',
        border: '1px solid black'
    };

    if(exits.length) {
        exits.forEach(exit => {
            squareStyle[`border-${exit.dir}`] = 'none';
        });
    }

    return (
        <div style={squareStyle} id={id}>
        </div >
    );

};

Square.propTypes = {
    id: PropTypes.string,
    exits: PropTypes.arrayOf(
        PropTypes.shape({
            dir: PropTypes.string,
            id: PropTypes.string
        })
    )
};

export default Square;
