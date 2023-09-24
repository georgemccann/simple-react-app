
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "@/components";

export default function Customers() { 
  const customers = useSelector(state => state.customers.data);
  console.log(customers)
    
  return (
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center py-5">
        <h1>Customers</h1>
      </div>

      <div class="col-lg-8">
        <Table 
        headingColumns={['Name', 'xx', 'xx']}
        title="Manage Customers">
          {Object.entries(customers).map(([key, value]) => (  
            <tr key={key}>
              <td>{key}</td>
              <td>{customers[key].name}</td>
              <td>{customers[key].email}</td>
              <td>Delete</td>
            </tr>
          ))}
        
          
        </Table>
      </div>
    </div>
  );
}