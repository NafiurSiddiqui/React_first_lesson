import React from 'react';
//we kept adding react up here just clarify that JSX under the hood use react library and we often see this on various projects.
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    //we need the data that is saved in the form,therefore we needed a way to get those saved data right here
    
    const saveExpenseData = (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }

   

    //since this is our custom element we can make our custom attribute
    //** child to parent component props (bottom up) */
    return (
<div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseData}/>
</div>

    )
}

export default NewExpense;

//now we need to send this component to App.js because in the end,that is where we are putting all of these componenets for rendering.