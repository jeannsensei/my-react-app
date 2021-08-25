import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {
  const { items } = props;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        {items?.map((item, index) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={index}
              id={index}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
