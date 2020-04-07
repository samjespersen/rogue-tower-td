export const getGrid = state => state.game.gridRender;
export const getEnemies = state => state.game.enemies;
export const getRows = state => state.game.grid.length;
export const getCols = state => state.game.grid[0].length;
export const getStart = state => state.game.grid.find(sq => sq.path).id;
