import React, {useState} from 'react';

const Form = function (props) {
    const [columnName, setColumnName] = useState('');
    const [operator, setOperator] = useState('');
    const [filterValue, setValue] = useState('');


    function formSubmit(event) {
        event.preventDefault();
        if (columnName && operator && filterValue) {
            props.setFilter({
                    columnName: columnName,
                    operator: operator,
                    filterValue: filterValue
            })

        }
    }

    function columnNameSet(event) {
        setColumnName(event.target.value);
    }

    function operatorSet(event) {
        setOperator(event.target.value);
    }

    function filterValueSet(event) {
        setValue(event.target.value);
    }

    return (
        <form id="filterForm">
            <select id="columnName" onChange={columnNameSet}>
                <option value="0"></option>
                <option value="date">Дата</option>
                <option value="name">Название</option>
                <option value="quantity">Количество</option>
                <option value="distance">Расстояние</option>
            </select>
            <select id="operator" onChange={operatorSet}>
                <option value="0"></option>
                <option value="=">равно</option>
                <option value="~">содержит</option>
                <option value=">">больше</option>
                <option value="<">меньше</option>
            </select>
            <input id="filterValue" type="text" onChange={filterValueSet}/>
            <button onClick={formSubmit}>OK</button>
            
        </form>
    )
    
    
}

export default Form;