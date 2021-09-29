import React from 'react';
function Rows({date, name, quantity, distance}) {
    return ( 
        <tbody>
            <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{distance}</td>
            </tr>
        </tbody>
    );
  }
  
  export default Rows;