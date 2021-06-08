import { addExpense, editExpense, removeExpense } from '../../Actions/expenses';

test( 'should setup remove expense setup object',()=>{

    const action =removeExpense({ id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });

});
test( 'should setup edit expense setup object',()=>{

    const action =editExpense('123abc', { description: 'coffee' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { description: 'coffee' }
    });

});
test( 'should setup add expense with parameters setup object',()=>{

    const inputData = {
        
            description: 'Tea',
            note: 'Paid bill',
            amount:200,
            createdAt:1000
        
    };
    const data= addExpense(inputData);
    expect(data).toEqual({
        type:"ADD_EXPENSE",
        expense: {
        ...inputData,
        id: expect.any(String)
        }
    });

});
test( 'should setup add expense without parameters setup object',()=>{

    const inputData = {
        
            description: '',
            note: '',
            amount:0,
            createdAt:0
        
    };
    const data= addExpense(inputData);
    expect(data).toEqual({
        type:"ADD_EXPENSE",
        expense: {...inputData,
        id: expect.any(String)}
    });

});