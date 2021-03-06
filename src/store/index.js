import { createStore, applyMiddleware } from 'redux';
import app from '@reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export default function configureStore() {
  
  let store = createStore(
  	app:app,
  	applyMiddleware(thunk),
  	applyMiddleware(logger)
  );

  return store;
}