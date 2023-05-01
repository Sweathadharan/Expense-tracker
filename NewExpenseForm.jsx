import React, { useState } from 'react'
import './NewExpenseForm.css'
const NewExpenseForm = (props) => {
    const{save} = props;
    // const [title,setTital] = useState(null);
    let [title,setTitle]=useState('');
    let [amount,setAmount]=useState('');
    let [date,setDate]=useState('');
    const onTitleChangeHandler=(event) =>{
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    const onAmountChangeHandler=(event) =>{
        console.log(event.target.value);
        setAmount(event.target.value);
    }
    const onDateChangeHandler=(event) =>{
        console.log(event.target.value);
        setDate(event.target.value);
    }
    const onFormSubmitHandler = (event) =>{
            event.preventDefault();
            const new_expense={
                title,amount,date:new Date(date)
            }
            save(new_expense)
            setTitle('');
            setAmount('');
            setDate('');

    }
    return ( 
    
        <form onSubmit={onFormSubmitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'> 
            <label htmlFor="expenses_title">title</label>
            <input type="text"
             placeholder="Title" 
             id="expenses_title"
              name="title" 
              value={title} 
              onChange={onTitleChangeHandler}></input>
            </div>

            <div className='new-expense__control'>
            <label htmlFor="expenses_amount">Amount</label>
            <input type="number" 
            placeholder="Amount" 
            id="expenses_amount" 
            min="0" 
            max="10000" 
            name="amount" 
            value={amount}
            onChange={onAmountChangeHandler}></input>
            </div>

            <div className='new-expense__control'>
            <label htmlFor="expenses_date">Date</label>
            <input type="date" 
             id="expenses_date"
             name="date" 
             value={date}
             onChange={onDateChangeHandler}></input>
           </div>
           </div>

            <div className='new-expense__actions'>
                <button>Cancel</button>
                <button>Add Expensenses</button>
            </div>

        </form>
        
     );
}
 
export default NewExpenseForm;