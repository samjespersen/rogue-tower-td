import React from 'react';
import Grid from './grid/Grid';

const rows = 5;
const cols = 5;
const path = [
    'R', 'RL', 'X', 'X', 'B',
    'X', 'TB', 'X', 'X', 'TB',
    'X', 'TR', 'RL', 'X', 'TB',
    'X', 'X', 'TB', 'X', 'TB',
    'X', 'X', 'TR', 'RL', 'TL'
];


let plot = [];
for(let i = 0; i < rows * cols; i++) {

    let exits = path[i].split('').map(letter => {

        if(letter === 'T') return { dir: 'top', id: i - cols + 1 };
        if(letter === 'R') return { dir: 'right', id: i + 2 };
        if(letter === 'B') return { dir: 'bottom', id: i + cols + 1 };
        if(letter === 'L') return { dir: 'left', id: i };

        return [];

    });

    plot.push({
        id: i + 1,
        path: path[i] === 'X' ? false : true,
        exits: exits
    });
}

console.log(plot);


// const plot = [
//     {
//         id: 1,
//         path: true
//         exits: [
//             {
//                 dir: 'top',
//                 id: 2
//             },
//         ]
//     },
//     {
//         id: 2,
//         path: true,
//         exits: [
//             {
//                 dir: 'bottom',
//                 id: 1
//             }
//         ]
//     }
// ];

const App = () => {
    return (
        <Grid plot={plot} />
    );
};

export default App;
