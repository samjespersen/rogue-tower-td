import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ dimensions, grid }) => {

    const gridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: `${dimensions.rows * 12}px`,
        width: `${dimensions.cols * 12}px`,
        margin: 'auto'
    };

    return (
        <div style={gridStyle}>
            {grid}
        </div>
    );
};


Grid.propTypes = {
    grid: PropTypes.array,
    dimensions: PropTypes.object
};


export default Grid;
