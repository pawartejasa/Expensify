import React from 'react';
import { addExpense } from '../Actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddexpensePage=(props)=>(
    <div>
    <h1>
    Expenses</h1>
    <ExpenseForm onSubmit={((expense)=>{
        props.dispatch(addExpense(expense));
        props.history.push('/');
    })} />
    </div>
);
export default connect()(AddexpensePage);