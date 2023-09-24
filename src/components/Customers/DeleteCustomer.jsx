import React from 'react'; 

export default function DeleteCustomer({customerId}) {
  
  const deleteCustomer = (customerId) => { 
    console.log("Delete customer with id: " + customerId);
  }
  
   
  return ( 
    <button className="btn btn-danger" onClick={() => deleteCustomer(customerId)}>Delete</button>
  );
}
