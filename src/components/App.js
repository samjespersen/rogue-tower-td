import React from 'react';
import Grid from './grid/Grid';

const rows = 10;
const cols = 10;



const plot = [
    {
        id: 1,
        exits: [
            {
                dir: 'top',
                id: 2
            },
        ]
    },
    {
        id: 2,
        exits: [
            {
                dir: 'bottom',
                id: 1
            }
        ]
    }
];

const App = () => {
    return (
        <Grid plot={plot} />
    );
};

export default App;
