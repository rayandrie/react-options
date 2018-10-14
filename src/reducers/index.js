import { combineReducers } from 'redux';
// import from form reducer
import { reducer as formReducer } from 'redux-form';
// import options Reducer
import optionsReducer from './optionsReducer';

const rootReducer = combineReducers({
    optionsReducer: optionsReducer,
    form: formReducer
});

export default rootReducer;