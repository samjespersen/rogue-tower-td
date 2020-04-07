import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGrid, getEnemies, getRows, getCols } from '../../selectors/gameSelectors';
import { renderGrid, moveEnemy } from '../../actions/gameActions';
import Grid from './Grid';

const PlayArea = ({ grid, enemies, rows, cols, moveEnemy, renderGridArray }) => {

    useEffect(() => {
        renderGridArray();
    }, []);

    setInterval(() => {
        moveEnemy(1, enemies[0].position + 1);
    }, 500);

    return (
        <>
            {grid && <Grid grid={grid} rows={rows} cols={cols} enemies={enemies} />}
        </>
    );
};

const mapStateToProps = state => ({
    grid: getGrid(state),
    enemies: getEnemies(state),
    rows: getRows(state),
    cols: getCols(state)
});

const mapDispatchToProps = dispatch => ({
    renderGridArray() {
        dispatch(renderGrid());
    },
    moveEnemy(id, newPos) {
        dispatch(moveEnemy(id, newPos));
    }
});



PlayArea.propTypes = {
    grid: PropTypes.array,
    renderGridArray: PropTypes.func,
    enemies: PropTypes.array,
    rows: PropTypes.number,
    cols: PropTypes.number,
    moveEnemy: PropTypes.func
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayArea);
