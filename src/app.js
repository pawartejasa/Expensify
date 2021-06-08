import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import ConfigureStore from './Store/ConfigureStore';
import { addExpense } from './Actions/expenses';
import { Provider } from 'react-redux';
import { setTextFilter } from './Actions/filters';
import getVisibleExpenses from './Selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = ConfigureStore();


const jsx = (<Provider store={store}>
        <AppRouter />
        
    </Provider>
    );
 
ReactDOM.render(jsx, document.getElementById('approot'));
