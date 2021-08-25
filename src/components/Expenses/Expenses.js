import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const { items } = props;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>} */}
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
