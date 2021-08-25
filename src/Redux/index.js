import { combineReducers } from 'redux'
import configureStore from './CreateStore'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    product: require('./ProductRedux').reducer,

  })

  const {store} = configureStore(rootReducer) // call with root epic ?
  
  return store
}
