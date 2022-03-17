import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
 if (props.items.length === 0) {
  //  you can name anything you want like arguments with props.item or props.listItem. NOT only props
  return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
 }

 return (
  <ul className="expenses-list">
   {props.items.map((expense) => (
    <ExpenseItem
     key={expense.id}
     title={expense.title}
     amount={expense.amount}
     date={expense.date}
    />
   ))}
  </ul>
 );
}

export default ExpensesList;
