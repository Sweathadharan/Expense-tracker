import React, { useState } from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
const ExpenseItem =(props)=>{
    // const title = 'hello world';
    const {
        date=new Date(),
        title='',
        amount=0
    }=props;
    // const [modified_title,setModifiedTitle] = useState(title)
    
    return (
        <div className="expense-item">
       
                <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2>{title}
                    </h2>
                <div className="expense-item__price">Rs.{amount}</div>

        </div>
        {/* <button onClick={()=>{setModifiedTitle('updated');
        console.log(modified_title,props);

        }}
        >Update
        </button> */}
        </div>
    )

}
export default ExpenseItem;