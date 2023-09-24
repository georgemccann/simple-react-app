
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Customers() { 
  const Customers = useSelector(state => state.customers);
    
  return (
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center py-5">
        <h1>Customers</h1>
      </div>
    </div>
  );
}