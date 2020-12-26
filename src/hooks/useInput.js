import {useState, useCallback} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialState = null) => {
    const [value, setValue] = useState(initialState);
    const handler = useCallback( (e) => {
        setValue(e.target.value);
    },[]);
    
    return [value, handler, setValue];
}