import React, {} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput'


const AddNumber = () => {

    const [value, onChangeValue, setValue] = useInput('');
    const dispatch = useDispatch();
    const size = useSelector((state) => state.size)

    const onClickBtn = () => {
        dispatch({
            type: 'INCREAMENT_SIZE',
            data: size+parseInt(value),
        })
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
