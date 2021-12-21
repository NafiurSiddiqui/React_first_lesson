import React, { useState } from 'react';
import './ExpenseForm.css';

// ** event handler, state management, two way binding

//onchange is basically same as oninput but it can be applied to all of instances such as - a drop down.
//onchange and oninput logs every key stroke

//Method 1 of using state..

const ExpenseForm = (props) => {
 // we are handling multiple states with usestate
 const [enteredTitle, setEnteredTitle] = useState('');
 const [enteredAmount, setEnteredAmount] = useState('');
 const [enteredDate, setEnteredDate] = useState('');

 const titleChangeHandler = (event) => {
  console.log(event.target.value);
  setEnteredTitle(event.target.value);
 };
 const amountChangeHandler = (event) => {
  console.log(event.target.value);
  setEnteredAmount(event.target.value);
 };
 const dateChangeHandler = (event) => {
  console.log(event.target.value);
  setEnteredDate(event.target.value);
 };
 //we could have attach the handler on submit button button but type='submit' has a default behaviour of submitting the whole form element.Therefore,we attached the handler on form itself

 const submitHandler = (e) => {
  //one of browsers default behaviour of submission is to reload the page while sending the form to the server which is hosting the page
  e.preventDefault();

  //* storing input value

  const expenseData = {
   title: enteredTitle,
   amount: enteredAmount,
   date: new Date(enteredDate),
   //we r converting the value of date string to a new Date object
  };
  // console.log(expenseData);

  //* we call the saveExpenseData from NewExpense.js to send this data there

  props.onSaveExpenseData(expenseData);

  // note: how we call the onSaveExpenseData attribute from newExpense as function here and pass in expenseData as parameter,which in turn,saveExpenseData's argument will recieve.We are able to pass function like this via PROPS

  //* to clear input

  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
 };
 return (
  //* total form component

  <form onSubmit={submitHandler}>
   <div className="new-expense__controls">
    <div className="new-expense__control">
     <label>Title</label>
     <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
    </div>
    <div className="new-expense__control">
     <label>Amount</label>
     <input
      type="number"
      min="0.01"
      step="0.01"
      value={enteredAmount}
      onChange={amountChangeHandler}
     />
    </div>
    <div className="new-expense__control">
     <label>Date</label>
     <input
      type="date"
      min="2019-01-01"
      max="2022-12-31"
      value={enteredDate}
      onChange={dateChangeHandler}
     />
    </div>
   </div>
   <div className="new-expense__actions">
    <button type="submit">Submit</button>
    {/* now the whoel form element will be submitted upon submit pressed */}
   </div>
  </form>
 );
};

// method 2 of managing state

// const ExpenseForm = ()=>{

//     const [userInput,setUserInput] =useState({
//         enteredtitle:'',
//         eneteredAmount:'',
//         enteredDate:''
//     })

//     const titleChangeHandler = (event)=>{
//         // console.log(event.target.value);
//         setUserInput({
//             ...userInput,
//             enteredtitle:event.target.value
//         })

//         // REMEMBER  manipulating one state like this would over ride the original state,if you update for one .e.g.enteredTitle, you will need to have rest of them as well.That is why we used spread operator here
//     }
//     const amountChangeHandler = (event)=>{
//        setUserInput({
//             ...userInput,
//             enteredAmount:event.target.value
//         })

//     }
//     const dateChangeHandler = (event)=>{
//        setUserInput({
//             ...userInput,
//             enteredDate:event.target.value
//         })
//     }
//     return (
//         <form>
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Title</label>
//                     <input type="text" onChange={titleChangeHandler} />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Date</label>
//                     <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
//                 </div>
//             </div>
//             <div className='new-expense__actions'>
//                 <button type='submit'>Submit</button>
//             {/* now the whoel form element will be submitted upon submit pressed */}
//             </div>
//         </form>
//     )
// }

// method 3:
/**
 * whenever we update and we depend on the previous state,we should never do it like method 2 but this method 👇
 *
 * updating state like method 2 does not ensure that the new update
 */

// const ExpenseForm = ()=>{

//     const [userInput,setUserInput] =useState({
//         enteredtitle:'',
//         eneteredAmount:'',
//         enteredDate:''
//     })

//     const titleChangeHandler = (event)=>{
//         // console.log(event.target.value);
//         // setUserInput({
//         //     ...userInput,
//         //     enteredtitle:event.target.value
//         // })
//         setUserInput((prevState)=>{
//             //this will recieve the previous state snapshot
//             //and now we will return the new state snapshot
//             return {
//                 ...prevState,
//                 enteredtitle:event.target.value
//             }
//         })
//     }

//     //with the previous approach we could have depended on an outdated snapshot(method 2)
//     //with this approach gurantees our state update,since react schedule all update
//     //use this approach in case for update that relies on prev state

//     const amountChangeHandler = (event)=>{
//        setUserInput({
//             ...userInput,
//             enteredAmount:event.target.value
//         })

//     }
//     const dateChangeHandler = (event)=>{
//        setUserInput({
//             ...userInput,
//             enteredDate:event.target.value
//         })
//     }
//     return (
//         <form>
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Title</label>
//                     <input type="text" onChange={titleChangeHandler} />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Date</label>
//                     <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
//                 </div>
//             </div>
//             <div className='new-expense__actions'>
//                 <button type='submit'>Submit</button>
//             {/* now the whoel form element will be submitted upon submit pressed */}
//             </div>
//         </form>
//     )
// }

//Nonetheless, we r gonna work with the multi state approach

export default ExpenseForm;
