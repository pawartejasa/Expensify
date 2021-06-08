import expenseReducer from './../../Reducers/expenses'
import moment from 'moment';

const expenses=[
    {
        id: '1',
        description: 'note',
        note: '',
        amount: 196,
        createdAt: 2000
    },
    {
        id: '2',
        description: 'breakfast',
        note: '',
        amount: 2000,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    },
    {
        id: '3',
        description: '',
        note: '',
        amount: 196,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
]

test('should set expense reducer', ()=>{
    const action={
            type:'ADD_EXPENSE', expense:{
                id: '1',
                description: 'note',
                note: '',
                amount: 196,
                createdAt: 2000
            }
            
        };
        
     
    const state= expenseReducer(expenses, action);
    expect(state).toEqual([...expenses,action.expense]);
    });