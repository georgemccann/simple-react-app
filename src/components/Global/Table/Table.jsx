import React, { useState } from 'react'; 

export default function Table(props) {
  const {title, headingColumns, children} = props;
  return ( 
    <div className="table-container">
      <div className="table-container-title">
        <h2>{title}</h2>
      </div> 
      <table className="table">
        <thead className="thead-dark">
          <tr> 
            {headingColumns.map((col, index) => (
              <th scope="col" key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div> 
  );
}
