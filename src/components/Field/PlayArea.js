import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGridDimensions, getGridRender } from '../../selectors/gameSelectors';
import { renderGrid } from '../../actions/gameActions';
import { Grid } from './Grid';

const PlayArea = ({ dimensions, grid, renderGrid }) => {

    renderGrid();

    return (
        <Grid dimensions={dimensions} grid={grid} />
    );
};

const mapStateToProps = state => ({
    grid: getGridRender(state),
    dimensions: getGridDimensions(state)
});

const mapDispatchToProps = dispatch => ({
    renderGrid() {
        dispatch(renderGrid());
    }
});



PlayArea.propTypes = {
    grid: PropTypes.array,
    dimensions: PropTypes.object,
    renderGrid: PropTypes.func
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayArea);
