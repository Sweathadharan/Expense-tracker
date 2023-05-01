const getAllExpenses=(setExpenses)=>{
    fetch('localhost:3000/expense' , {method:'GET'})
    .then((res)=>res.json())
    .then((expenses)=>setExpenses(expenses))
    .catch((e)=>console.log(e))
      }

    //   export const addExpenses= (post_data{},callback)=>{

    //   }