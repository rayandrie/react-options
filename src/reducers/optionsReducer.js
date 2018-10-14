import { FETCH_OPTIONS } from '../actions/constants';

const INITIAL_STATE =  {
    options: {}
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_OPTIONS:
            console.log("Here is the payload: ");
            console.log(action.payload);
            return {
                options: action.payload
            };
    }
    return state;
}