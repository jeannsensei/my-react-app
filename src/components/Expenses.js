import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const { items } = props;

  return (
    <div className="expenses">
      {items?.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
