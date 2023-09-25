import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {updateCustomers} from "@/actions/customers"


export default function DeleteCustomer({customerId}) {
  const customers = useSelector(state => state.customers.data);
  const dispatch = useDispatch(); 
  
  const deleteCustomer = (customerId) => { 
    let newCustomers = _.omit(customers,customerId);
    dispatch(updateCustomers(newCustomers)); 
  } 
  
  return ( 
    <button className="btn btn-danger" onClick={() => deleteCustomer(customerId)}>Delete</button>
  );
}
