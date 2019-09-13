import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import {App} from './components/app/App.container';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
