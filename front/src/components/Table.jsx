import React from 'react';

const Table = function (props) {

    function setSort(e) {
        console.log(e.target.dataset.name)
        props.setSort(e.target.dataset.name)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <a href="#" onClick={setSort} data-name="date">Дата</a>
                    </th>
                    <th>
                        <a href="#" onClick={setSort} data-name="name">Название</a>
                    </th>
                    <th>
                        <a href="#" onClick={setSort} data-name="quantity">Количество</a>
                    </th>
                    <th>
                        <a href="#" onClick={setSort} data-name="distance">Расстояние</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.data && props.data.map(item =>(
                <tr key={item.id}>
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