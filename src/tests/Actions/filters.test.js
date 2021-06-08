import moment from 'moment';
import { sortByAmount, sortByDate, setTextFilter, setStartDate } from '../../Actions/filters';

test('should generate set start date action object', ()=>{
    const action =sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
test('should generate set start date action object', ()=>{
    const action =setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    });
});
test('should generate set start date action object', ()=>{
    const action =sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
test('should generate set start date action object', ()=>{
    const action =setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startdate: moment(0)
    });
});
/* test('should generate set start date action object', ()=>{
    const action =setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        enddate: moment(0)
    });
}); */