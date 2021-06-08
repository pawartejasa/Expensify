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

store.dispatch(addExpense({ description: 'Water bill', amount: 5400, createdAt:1000}));
store.dispatch(addExpense({ description: 'Gas bill',amount: 54000  }));
store.dispatch(addExpense({ description: 'Phone bill',amount: 540000  }));
//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (<Provider store={store}>
        <AppRouter />
        
    </Provider>
    );
 
ReactDOM.render(jsx, document.getElementById('approot'));
