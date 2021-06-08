import moment from 'moment';
import filterReducer, { sortByAmount, sortByDate, setTextFilter, setStartDate } from '../../Reducers/filters';
test('should set start by date', ()=>{
const action={type:'SET_TEXT_FILTER', text:'testit'};
const state= filterReducer(undefined, action);
expect(state.text).toBe('testit');
});