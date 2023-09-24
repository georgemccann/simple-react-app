
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table, CustomerTableItem} from "@/components";

export default function Customers() { 
  const customers = useSelector(state => state.customers.data);
 
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center py-5">
          <h1>Customers</h1>
        </div> 
        <div className="col-lg-8">
          <Table 
            headingColumns={['ID', 'Name', 'Email', "Settings"]}
            title="Manage Customers">
              {Object.entries(customers).map(([key, value]) => (  
                <CustomerTableItem
                  keyId={key}
                  name={customers[key].name}
                  email={customers[key].email} 
                /> 
              ))} 
          </Table>
        </div>
      </div> 
    </div> 
  );
}