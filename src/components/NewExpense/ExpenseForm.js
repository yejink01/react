import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('')
// const [userInput, setUserInput] = useState({
//   enteredTitle:'',
//   enteredAmount:'',
//   enteredDate:''  
// })

  const titleChangeHandler = (event) => {
    enteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
  
  };

  const amountChangeHandler = (event) => {
    enteredAmount(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   })
  };
  const dateChangeHandler = (event) => {
    enteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };
  const submitHandler = (event) =>{
    event.preventDe  
  };

  return (
  <form onSubmit ={submitHandler}>
    <div clasName = "new-expense_controls">
      <div clasName = "new-expense_control">
        <label>title</label>
        <input type = "text" onChange={titleChangeHandler} />
      </div> 
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type = 'number' min='0.01' step = "0.01" onChange={amountChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type = 'date' min='2019-01-01' step = "2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type = 'submit' onClick={submitHandler}>Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;