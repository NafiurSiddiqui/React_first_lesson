import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

// const Expenses =(props) =>{

//   const [filteredYear,setFilteredYear] = useState('2020');

//   const filterChangeHandler = selectedYear =>{
//     setFilteredYear(selectedYear);
//   }
//   return (
//     <div>
//     <Card className="expenses">
//       <ExpensesFilter value={filteredYear} onChangeFilter={filterChangeHandler}/>
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />
//     </Card>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------------------- NEXT STAGE

// const Expenses = (props) => {
//  const [filteredYear, setFilteredYear] = useState('2020');

//  const filterChangeHandler = (selectedYear) => {
//   setFilteredYear(selectedYear);
//  };

//  const filteredExpenses = props.items.filter((expense) => {
//   return expense.date.getFullYear().toString() === filteredYear;
//  });

//  return (
//   <div>
//    <Card className="expenses">
//     <ExpensesFilter
//      selected={filteredYear}
//      onChangeFilter={filterChangeHandler}
//     />
//     {/** we are gonna dynamically render the expenses items,
//      * we wanna grab the items via props from the expense array
//      */}

//     {props.items.map((expense) => (
//      <ExpenseItem
//       key={expense.id}
//       // 👆* for every list item in react should have a key in order to keep track of the new index and not having to go over each list item to find a new slot */
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//      />
//     ))}
//    </Card>
//   </div>
//  );
// };

// export default Expenses;

// -------------------------------------------------------------------------------------------------------------- NEXT STAGE 3

const Expenses = (props) => {
 const [filteredYear, setFilteredYear] = useState('2020');

 const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
 };

 const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
 });

 return (
  <div>
   <Card className="expenses">
    <ExpensesFilter
     selected={filteredYear}
     onChangeFilter={filterChangeHandler}
    />
    {/** we are gonna dynamically render the expenses items,
     * we wanna grab the items via props from the expense array
     */}

    {filteredExpenses.map((expense) => (
     <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
     />
    ))}
   </Card>
  </div>
 );
};

export default Expenses;
