import React, { useState } from 'react'; 
import {DeleteCustomer} from '@/components';

export default function CustomerTableItem(props) {
  const {keyId, name, email} = props;
  return ( 
    <tr key={keyId}>
      <td>{keyId}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td><DeleteCustomer customerId={keyId} /></td>
    </tr>
  );
}
