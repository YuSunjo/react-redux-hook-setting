import React, {} from 'react';
import useInput from '../hooks/useInput'


const AddNumber = () => {

    const [value, onChangeValue, setValue] = useInput('');

    const onClickBtn = () => {

    };
    return (
        <div>
            <h1>add Number</h1>
            <button onClick={onClickBtn}>+</button>
            <input type="text" value={value} onChange={onChangeValue} />
        </div>
    )
}

export default AddNumber;
