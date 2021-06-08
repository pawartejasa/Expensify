import moment from 'moment';
import selectExpenses from '../../Selectors/expenses'
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

test('should generate set start date action object', ()=>{
    const filters={
         text:'e', 
         sortBy: 'date', 
         startdate: undefined, 
         enddate: undefined
        
    };
    const action =selectExpenses(expenses,filters);
    expect(action).toEqual[expenses[0],expenses[1]];
});
test('should generate set start date action', ()=>{
    const filters={
         text:'', 
         sortBy: 'date', 
         startdate: moment(0), 
         enddate: undefined
        
    };
    const action =selectExpenses(expenses,filters);
    expect(action).toEqual[expenses[0]];
});