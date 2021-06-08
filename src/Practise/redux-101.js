import { Switch } from 'react-router';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense =({ description="", note="", amount=0, createdAt=0}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense=({id}={})=>({
        type: 'REMOVE_EXPENSE',
        id

});
const editExpense = (id, updates)=>({
    
        type: 'EDIT_EXPENSE',
        id,
        updates
});
const setTextFilter=(text= '') =>({
    type: 'SET_TEXT_FILTER',
    text
});
 const sortByAmount=()=>({
     type: 'SORT_BY_AMOUNT'
 });
 const sortByDate=()=>({
    type: 'SORT_BY_DATE'
});
const setStartDate=(startdate)=>({
    type: 'SET_START_DATE',
    startdate

});
const setEndDate=(enddate)=>({
    type: 'SET_END_DATE',
    enddate

});




const expenseDefaultState=[];
const expenseReducer=(state= expenseDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>  
             {
                    if(expense.id === action.id){
                        return {                           
                            ...expense,
                            ...action.updates
                        }
                    }
                    else{
                        return expense;
                    }
            });
        default:
            return state;
            
    }
}


const filterReducerDefaultState={
    text: '',
    sortBy: 'date',
    startdate: undefined,
    enddate: undefined

}
const filterReducer=(state=filterReducerDefaultState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                    ...state,
                    sortBy: 'DATE'
                };
        case 'SORT_BY_AMOUNT':
            return {
                 ...state,
                sortBy: 'AMOUNT'
        };
        case 'SET_START_DATE':
            return {
                 ...state,
                 startdate: action.startdate
        };
        case 'SET_END_DATE':
            return {
                 ...state,
                 enddate    : action.enddate
        };
        default:
            return state;
                
           
    }
}
const store=createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

const getVisibleExpenses = (expenses, { text, sortBy, startdate, enddate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startdate !== 'number' || expense.createdAt >= startdate;
      const endDateMatch = typeof enddate !== 'number' || expense.createdAt <= enddate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };


  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });

const expense1=store.dispatch(addExpense({description: "rent", amount: 100}));
const expense2=store.dispatch(addExpense({description: "study", amount: 300}));

//store.dispatch(removeExpense({id: expense1.expense.id}));
store.dispatch(editExpense( expense1.expense.id, { description:"cooking" }));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(550));




