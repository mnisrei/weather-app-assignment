import { combineReducers } from 'redux'
// REDUCERS
import weatherReducer from './weatherReducer'

//Creating root reducer
const rootReducer = combineReducers({
    weatherState: weatherReducer
})

export default rootReducer;