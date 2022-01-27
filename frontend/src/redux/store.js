import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
//Creating store with redux devtool extension enabled
const composeEnhancers = compose(applyMiddleware(thunk));

const configureStore = () => {
    return createStore(rootReducer, composeWithDevTools(composeEnhancers));
};
export const store = configureStore();