import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGrid, getEnemies, getRows, getCols } from '../../selectors/gameSelectors';
import { renderGrid, moveEnemy } from '../../actions/gameActions';
import Grid from './Grid';

const PlayArea = ({ enemies, renderGridArray }) => {
    let [useGrid, setGrid] = useState(false);

    useEffect(() => {
        renderGridArray();
        setGrid(true);
    }, []);

    return (
        <>
            {useGrid && <Grid />}
        </>
    );
};

const mapStateToProps = state => ({
    // grid: getGrid(state),
    enemies: getEnemies(state)
    // rows: getRows(state),
    // cols: getCols(state)
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
