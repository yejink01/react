import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props){
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );

}

export default ExpenseItem;

      {/* //toISOString=DATE객체에 사용가능하도록!-텍스트 형태로~ */}
      // toLocaleString() returns a date as a string, using locale settings: