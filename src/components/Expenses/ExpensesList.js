import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items?.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
            id={expense.id}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
