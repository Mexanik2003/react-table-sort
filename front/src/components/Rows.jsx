function Rows({data, name, quantity, distance}) {
    return ( 
        <tbody>
            <tr>
            <td>{data}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{distance}</td>
            </tr>
        </tbody>
    );
  }
  
  export default Rows;