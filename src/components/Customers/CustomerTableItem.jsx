import React, { useState } from 'react'; 

export default function CustomerTableItem(props) {
  const {keyId, name, email} = props;
  return ( 
    <tr key={keyId}>
      <td>{keyId}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>Delete</td>
    </tr>
  );
}
