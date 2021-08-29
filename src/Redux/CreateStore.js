import { createStore, applyMiddleware, compose } from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import localStorage from '../Services/localStorage'
// creates the store
export default (rootReducer, rootEpic) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []


  

  /* ------------- Epic Middlewares ------------- */
  
  //const history = createBrowserHistory()

  const epicMiddleware = createEpicMiddleware({
    // dependencies: {
    //   //history
    // }
  })

  middleware.push(epicMiddleware)

  const enhancers = []
  enhancers.push(applyMiddleware(...middleware))
  const store = createStore(rootReducer,localStorage.loadFromLocalStorage(),  compose(...enhancers))
  store.subscribe(() => localStorage.saveToLocalStorage(store.getState()))

  // kick off root rootEpic
  epicMiddleware.run(rootEpic)

  return {store}
}
