import React from "react";
import ExpenseItem from "../expense_item/ExpenseItem";
import './ExpenseList.css';
const ExpenseList = (props)=>{
    const {expenses = []} = props;
    if(expenses.length===0){
        return <h3 className="expenses-list__fallback">No element found</h3>
    }
    return(
        <div className="expenses">
<div className="expenses-list">
    {
        expenses.map((each_expense) => (
            <ExpenseItem 
            key={each_expense.id}
            title={each_expense.title}
            amount={each_expense.amount}
            date={each_expense.date}

            />
        ))
    }
</div>
</div>
    );

}
 export default ExpenseList; 