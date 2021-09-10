import React from 'react';
import Rows from './Rows';

const Table = function (props) {

    function setSort(e) {
        console.log(e.target.dataset.name)
        props.setSort(e.target.dataset.name)
    }

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col"><a href="#" onClick={setSort} data-name="date">Дата</a></th>
                <th scope="col"><a href="#" onClick={setSort} data-name="name">Название</a></th>
                <th scope="col"><a href="#" onClick={setSort} data-name="quantity">Количество</a></th>
                <th scope="col"><a href="#" onClick={setSort} data-name="distance">Расстояние</a></th>
                </tr>
            </thead>
                {props.data && props.data.map(item =>(
                    < Rows 
                        key={item.id}
                        date={item.date} 
                        name={item.name} 
                        quantity={item.quantity}
                        distance={item.distance}
                    />
                ))}
        </table>

            )
    
    
}

export default Table;