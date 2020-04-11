import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { StateProvider } from './store';

render(
    <StateProvider>
        <App />
    </StateProvider>,
    document.getElementById('root')
);

