export const RENDER_GRID = 'RENDER_GRID';
export const renderGrid = () => ({
    type: RENDER_GRID
});

export const MOVE_ENEMY = 'MOVE_ENEMY';
export const moveEnemy = (id, newPos) => ({
    type: MOVE_ENEMY,
    payload: { id, newPos }
});
