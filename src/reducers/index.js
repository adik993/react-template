import {combineReducers} from 'redux';
import {
    userIsLoading,
    userHasErrored,
    user
} from 'reducers/user'

export default combineReducers({
    userIsLoading,
    userHasErrored,
    user
});