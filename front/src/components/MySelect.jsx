import React, {useState} from 'react';
import classes from './MyInput.module.css';


const MySelect = React.forwardRef(
    ({items, ...props},ref) => {

    console.log(items)
        return (
            <select ref={ref} className={classes.select} {...props}>
                {
                    items.map((item,index) =>
                        <option disabled={item.disabled} key={index} className={classes.option} value={item.value}>
                            {item.text}
                        </option>    
                    )
                }
            </select>
        )
    }

)
export default MySelect;
