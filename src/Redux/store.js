import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({});



const store = createStore(
  // rootReducer,
  composeEnhancers(
    applyMiddleware()
   
  )
);

export default store