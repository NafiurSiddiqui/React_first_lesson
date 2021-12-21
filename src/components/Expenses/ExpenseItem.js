// import React , { useState }from 'react';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

// function ExpenseItem(props) {

//   const [ title, setTitle] = useState(props.title);
// /**
//  * useState()
//  * always returns an array
//  * first parameter: the name variable or value it self
//  *
//  * second: a function that updates that variabel or value
//  */

// // NOTE  we can not use variable to change state,like let title = '' and try to change it inside clickHandler down there

//   const clickHandler = ()=>{
//     setTitle('updated!')

//   }

//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>

//       <button onClick={clickHandler}>Update!!</button>
//     </Card>
//   );
// }

// export default ExpenseItem;

//---------------------------------------------------------NEXT STAGE ------------------------------------------
function ExpenseItem(props) {
 return (
  <Card className="expense-item">
   <ExpenseDate date={props.date} />
   <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">${props.amount}</div>
   </div>
  </Card>
 );
}

export default ExpenseItem;
