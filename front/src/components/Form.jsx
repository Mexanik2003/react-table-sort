import React, {useState, useRef} from 'react';
import './Form.css';
import MySelect from './MySelect';

const Form = function (props) {
    const [columnName, setColumnName] = useState('');
    //const [operator, setOperator] = useState('');
    let operatorSelectRef = useRef();
    const [filterValue, setValue] = useState('');


    function formSubmit(event) {
        event.preventDefault();
        if (columnName && operatorSelectRef && filterValue) {
            props.setFilter({
                    columnName: columnName,
                    operator: operatorSelectRef.current.value,
                    filterValue: filterValue
            })

        }
    }

    function filterValueSet(event) {
        setValue(event.target.value);
    }

    return (
        <form id="filterForm" className="form">
            {/* Управляемый компонент */}
            <MySelect
                onChange={e => setColumnName(e.target.value)}
                items={[
                    {value: "0", text: "Столбец", disabled: true},
                    {value: "date", text: "Дата", disabled: false},
                    {value: "name", text: "Название", disabled: false},
                    {value: "quantity", text: "Количество", disabled: false},
                    {value: "distance", text: "Расстояние", disabled: false}

                ]}
            />
            {/* НЕуправляемый компонент */}
            <MySelect
                items={[
                    {value: "0", text: "Оператор", disabled: true},
                    {value: "=", text: "равно", disabled: false},
                    {value: "~", text: "содержит", disabled: false},
                    {value: ">", text: "больше", disabled: false},
                    {value: "<", text: "меньше", disabled: false}

                ]}
                ref = {operatorSelectRef}
            />
            <input id="filterValue" className="form__column" type="text" onChange={filterValueSet}/>
            <button onClick={formSubmit}>Поиск</button>
            
        </form>
    )
    
    
}

export default Form;