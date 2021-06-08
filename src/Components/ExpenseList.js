import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import removeExpense from '../Actions/expenses';
import selectExpenses from '../Selectors/expenses';

const ExpenseList = (props) => (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
  
  const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

  export default connect(mapStateToProps)(ExpenseList);


