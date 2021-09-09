import React, {useState} from 'react';

const Table = function (props) {
    console.log(props)
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Дата
                    </th>
                    <th>
                        Название
                    </th>
                    <th>
                        Количество
                    </th>
                    <th>
                        Расстояние
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.data.map(item =>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.distance}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
    
    
}

export default Table;