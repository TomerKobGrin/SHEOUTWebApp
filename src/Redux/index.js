import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootEpic from '../Epics'
export default () => {

  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    product: require('./ProductRedux').reducer,
    orders: require('./OrdersRedux').reducer,
  })

  const {store} = configureStore(rootReducer,rootEpic) // call with root epic ?
  return store
}
