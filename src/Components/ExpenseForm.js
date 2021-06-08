import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now=moment();
console.log(now.format('MMM Do YYYY'));
export default class ExpenseForm extends React.Component{
    
        state= {
            description: '',
            note: '',
            error: ''
        };
   
    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({ description }));
    };
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({ note }));
    };
    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            const error="You need to add amount and discription for expense";
            console.log('error');
            this.setState(()=>({ error: 'You need to add amount and discription for expense' }))
        }
        else{
            this.setState(()=>({
                error:''
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                note:this.state.note


            });
        }
    };
    render(){
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>  
            <input type="text"
            placeholder="Description"
            onChange={this.onDescriptionChange}
            value={this.state.description}
            autoFocus/>
            <input type="text"
            placeholder="Amount"
            onChange={this.onAmountChange}
            />
            <textarea placeholder="Enter Your Text"
            onChange={this.onNoteChange}
            value={this.state.note}></textarea>
            <button>Add Expense</button>
            <p>{this.state.error}</p>
            </form>
            </div>
        )
    }
}