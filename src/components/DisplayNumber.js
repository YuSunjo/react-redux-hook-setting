import React from 'react';
import { useSelector } from 'react-redux';

const DisplayNumber = () => {
    const size = useSelector((state) => state.size)

    return (
        <div>
            <h1>display number</h1>
            <input type="text" value={size}/>
        </div>
    )
}

export default DisplayNumber;
