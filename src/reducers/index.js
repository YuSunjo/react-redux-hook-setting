import { INCREAMENT_SIZE } from "../actions/types";

const initialState = {
    size: 0,
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREAMENT_SIZE:
            return {
                ...state,
                size: action.data
            }
        default:
            return state;

    }
}

export default rootReducer;