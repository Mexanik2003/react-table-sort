import React, {useState} from 'react';

const Form = function (props) {
    const [columnName, setColumnName] = useState('');
    const [operator, setOperator] = useState('');
    const [filterValue, setValue] = useState('');


    function formSubmit(event) {
        event.preventDefault();
        props.setFilter({
            filter: {
                columnName: columnName,
                operator: operator,
                filterValue: filterValue
            }
        })
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
                <option></option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
                <option>four</option>
            </select>
            <select id="operator" onChange={operatorSet}>
                <option></option>
                <option>one2</option>
                <option>two2</option>
                <option>three2</option>
                <option>four2</option>
            </select>
            <input id="filterValue" type="text" onChange={filterValueSet}/>
            <button onClick={formSubmit}>{columnName}OK</button>
            
        </form>
    )
    
    
}

export default Form;